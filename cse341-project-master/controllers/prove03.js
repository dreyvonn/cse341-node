const Artist = require('../models/artist');

exports.getIndex = (req, res, next) => {
    Artist.fetchAll(artists => {
        res.render('pages/prove03/', {
            path: '/prove03',
            title: 'Prove 03',
            artists: artists
        });
    });
};

exports.getArtistDetails = (req, res, next) => {
    artistId = req.params.artistId;
    Artist.getArtistById(artistId, artist => {
        res.render('pages/prove03/artist-details.ejs',{
            title: 'Artist Details',
            path: '/prove03/artist-details',
            artist: artist
        });
    });
};