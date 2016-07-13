var shoppingBasket = require('../shopping_basket');
var assert = require('chai').assert;

describe('Shopping Basket', function(){

  beforeEach(function(){

    shoppingBasket.total = 0;
    shoppingBasket.items = [];

  })

  it('should have a total price of 0 at start', function(){
    assert.equal(0, shoppingBasket.total)
  })

  it('should have no items in it at the start', function(){
    assert.equal(0, shoppingBasket.items.length)
  })

  it('should be able to add items', function(){
    shoppingBasket.add({name: 'Shoes', price:20});
    assert.equal(1, shoppingBasket.items.length);
    assert.equal(20, shoppingBasket.total);
  })

  it('should be able to remove items', function(){
    shoppingBasket.add({name: 'Shoes', price:20});
    shoppingBasket.remove({name: 'Shoes', price:20});
    assert.equal(0, shoppingBasket.items.length);
    assert.equal(0, shoppingBasket.total);
  })

  it('should give 10% discount on all baskets over £20', function(){
    shoppingBasket.add({name: 'Coat', price: 30});
    shoppingBasket.standardDiscount();
    assert.equal(27, shoppingBasket.total)
  })

  it('should give a further 5% discount if customer has coupon', function(){
    shoppingBasket.add({name: 'Coat', price: 50});
    shoppingBasket.add({name: 'Shoes', price: 30});
    shoppingBasket.add({name: 'Jeans', price: 20});
    shoppingBasket.applyCoupon();
    shoppingBasket.couponDiscount();
    assert.equal(85, shoppingBasket.total)
  })

  it('should apply bogof on duplicate items', function(){
    shoppingBasket.add({name: 'Coat', price: 50});
    shoppingBasket.add({name: 'Coat', price: 50});
    shoppingBasket.buyOneGetOne();
    assert.equal(50, shoppingBasket.total);
    assert.equal(1, shoppingBasket.items.length)
  })


})