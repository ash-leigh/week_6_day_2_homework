var shoppingBasket = {
  total: 0,
  items: [],
  coupon: false,
  add: function(item){
    this.items.push(item);
    this.total += item.price;
  },
  remove: function(item){
    var index = this.items.indexOf(item);
    this.total -= item.price;
    this.items.splice(index, 1);
  },
  standardDiscount: function(){
    if (this.total >= 20){
      this.total *= 0.9;
    }
  },
  applyCoupon: function(){
    this.coupon = true;
  },
  couponDiscount: function(){
    if (this.total >= 20 && this.coupon === true){
      this.total *= 0.85;
    }
  },
  //doesn't work
  buyOneGetOne: function(){
    duplicateBasket = [];

    this.items.sort;

    this.items.filter(function(v, i, o){if (i >= 0 && v!==o[i-1]) duplicateBasket.push(v); });

    duplicateBasket.forEach(function(item){
      this.total -= item.price;
      shoppingBasket.remove(item);
    })
  }
};

module.exports = shoppingBasket;

































