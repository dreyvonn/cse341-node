const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'artists.json'
);

const getArtistsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Artist {
    constructor(imageUrl, genre, name, description, id) {
        this.imageUrl = imageUrl;
        this.genre = genre;
        this.name = name;
        this.description = description;
        this.id = id;
    }

    static fetchAll(cb) {
        getArtistsFromFile(cb);
    }

    static getArtistById(id, cb) {
        getArtistsFromFile(artists => {
            const artist = artists.find(art => {
                return art.id === id;
            });
            cb(artist);
        });
    }
};