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
  var object = "In your cart, you have "
  
  for(var i = 0; i < cart.length; i++)
  {
    cart.length === 1 ? object += ` ${cart[i][itemName]} at ${cart[i][itemPrice]}.` :
    i === cart.length - 1 ? object += ` and ${itemName} at ${itemPrice}.` :
    object += ` and ${itemName} at ${itemPrice},`
  }
  
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
