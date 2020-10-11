const Artist = require('../models/artist');

exports.getIndex = (req, res, next) => {
    Artist.find()
      .then(artists => {
        res.render('pages/project/admin/index.ejs', {
            path: '/admin',
            title: 'Admin Artists',
            artists: artists
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

exports.getAddArtist = (req, res, next) => {
    res.render('pages/project/admin/edit-artist', {
      pageTitle: 'Add Artist',
      path: '/admin/add-artist',
      editing: false
    });
};

exports.postAddArtist = (req, res, next) => {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const genre = req.body.genre;
    const description = req.body.description;
    const artist = new Artist({
        name: name,
        genre: genre,
        description: description,
        imageUrl: imageUrl,
        userId: req.user._id
    });
    artist
        .save()
        .then(result => {
            // console.log(result);
            console.log('Created Arist');
            res.redirect('/project/admin');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEditArtist = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const artId = req.params.artistId;
    Artist.findById(artId)
      .then(artist => {
        if (!artist) {
          return res.redirect('/');
        }
        res.render('pages/project/admin/edit-artist', {
            pageTitle: 'Add Artist',
            path: '/admin/add-artist',
            editing: editMode,
            artist: artist
          });
      })
      .catch(err => console.log(err));
  };
  
  exports.postEditArtist = (req, res, next) => {
    const artId = req.body.artistId;
    const updatedName = req.body.name;
    const updatedGenre = req.body.genre;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
  
    Artist.findById(artId).then(artist => {
      artist.name = updatedName;
      artist.genre = updatedGenre;
      artist.description = updatedDesc;
      artist.imageUrl = updatedImageUrl;
      return artist
        .save()
    })
      .then(result => {
        console.log('UPDATED ARTIST!');
        res.redirect('/project/admin');
      })
      .catch(err => console.log(err));
  };

  exports.postDeleteArtist = (req, res, next) => {
    const artId = req.body.artistId;
    Artist
      .findByIdAndRemove(artId)
      .then(() => {
        console.log('DESTROYED ARTIST');
        res.redirect('/project/admin');
      })
      .catch(err => console.log(err));
  };
  