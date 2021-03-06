const Artist = require('../models/artist');
const Order = require('../models/order');

exports.getIndex = (req, res, next) => {
    Artist.find()
      .then(artists => {
        res.render('pages/project/shop', {
          artists: artists,
          title: 'Artists',
          path: '/artists'
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

exports.getArtistDetails = (req, res, next) => {
    const artistId = req.params.artistId;
    Artist.findById(artistId)
      .then(artist => {
        res.render('pages/project/shop/artist-details.ejs',{
            title: 'Artist Details',
            path: '/project/artist-details',
            artist: artist
        });
      })
      .catch(err => console.log(err));
  };

exports.getCart = (req, res, next) => {
    req.user
      .populate('cart.items.artistId')
      .execPopulate()
      .then(user => {
            const artists = user.cart.items;
            res.render('pages/project/shop/cart', {
                title: 'Cart',
                path: '/cart',
                artists: artists
            });
        })
      .catch(err => console.log(err));
  };

  exports.postCart = (req, res, next) => {
    const artId = req.body.artistId;
    Artist.findById(artId).then(artist => {
      return req.user.addToCart(artist);
    }).then(result => {
      console.log(result);
      res.redirect('/project/cart');
    });
  };

  exports.postCartDeleteArtist = (req, res, next) => {
    const artId = req.body.artistId;
    req.user
      .removeFromCart(artId)
      .then(result => {
        res.redirect('/project/cart');
      })
      .catch(err => console.log(err));
  };
  
  exports.postOrder = (req, res, next) => {
    req.user
      .populate('cart.items.artistId')
      .execPopulate()
      .then(user => {
        const artists = user.cart.items.map(i => {
          return { quantity: i.quantity, artist: { ...i.artistId._doc } };
        });
        const order = new Order({
          user: {
            email: req.user.email,
            userId: req.user
          },
          artists: artists
        });
        return order.save();
      })
      .then(result => {
        return req.user.clearCart();
      })
      .then(() => {
        res.redirect('/project/orders');
      })
      .catch(err => console.log(err));
  };
  
  exports.getOrders = (req, res, next) => {
    Order.find({ 'user.userId': req.user._id })
      .then(orders => {
        res.render('pages/project/shop/orders', {
          path: '/orders',
          pageTitle: 'Your Orders',
          orders: orders
        });
      })
      .catch(err => console.log(err));
  };
  