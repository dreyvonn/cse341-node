const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cart: {
    items: [
      { 
        artistId: { type: Schema.Types.ObjectId, ref: 'Artist', required: true },
        quantity: { type: Number, required: true } 
      }
    ]
  }
});

userSchema.methods.addToCart = function(artist) {
      const cartArtistIndex = this.cart.items.findIndex(cp => {
        return cp.artistId.toString() === artist._id.toString();
      });
      let newQuantity = 1;
      const updatedCartItems = [...this.cart.items];

      if (cartArtistIndex >= 0) {
        newQuantity = this.cart.items[cartArtistIndex].quantity +1;
        updatedCartItems[cartArtistIndex].quantity = newQuantity;
      } else {
        updatedCartItems.push({ artistId: artist._id, quantity: newQuantity });
      }

      const updatedCart = { items: updatedCartItems };
      this.cart = updatedCart;
      return this.save();
}

userSchema.methods.removeFromCart = function(artistId) {
  const updatedCartItems = this.cart.items.filter(item => {
    return item.artistId.toString() !== artistId.toString();
  });
  this.cart.items = updatedCartItems;
  return this.save();
}

userSchema.methods.clearCart = function() {
  this.cart = { items: [] };
  return this.save();
}

module.exports = mongoose.model('User', userSchema);
