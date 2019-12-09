var cart = [];

function getCart() 
{
 return cart;
}

function setCart(c) 
{
  cart = c;
  return cart;
}

function addToCart(item) 
{
  return cart.push({itemName : item, itemPrice : Math.floor(Math.random() * 101)}) ? `${item} has been added to your cart.` : `No item was added what happened?`
}

function viewCart() 
{
  var object 
  return cart.length === 0 ? `Your shopping cart is empty.` : object
}

function total() 
{
  // write your code here
}

function removeFromCart(item) 
{
  // write your code here
}

function placeOrder(cardNumber) 
{
  // write your code here
}
