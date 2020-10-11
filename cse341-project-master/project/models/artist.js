const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Artist', artistSchema);

// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'project',
//     'data',
//     'artists.json'
// );

// const getArtistsFromFile = (cb) => {
//     fs.readFile(p, (err, fileContent) => {
//         if (err) {
//             cb([]);
//         }
//         else {
//             cb(JSON.parse(fileContent));
//         }
//     });
// }

// module.exports = class Artist {
//     constructor(imageUrl, genre, name, description, id) {
//         this.imageUrl = imageUrl;
//         this.genre = genre;
//         this.name = name;
//         this.description = description;
//         this.id = id;
//     }

//     static fetchAll(cb) {
//         getArtistsFromFile(cb);
//     }

//     static getArtistById(id, cb) {
//         getArtistsFromFile(artists => {
//                 const artist = artists.find(art => {
//                 return art.id === id;
//             });
//             cb(artist);
//         });
//     }
// };