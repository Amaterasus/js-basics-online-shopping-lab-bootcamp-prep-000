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
  var object = "In your cart, you have"
  
  for(var i = 0; i < cart.length; i++)
  {
    cart.length === 1 ? object += ` ${cart[i].itemName} at $${cart[i].itemPrice}.` :
    i === cart.length - 1 ? object += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.` :
    object += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
  }
  
  return cart.length === 0 ? `Your shopping cart is empty.` : object
}

function total() 
{
  var total = 0
  
  for(var i = 0; i < cart.length; i++)
  {
    total += cart[i].itemPrice
  }
  
  return total
}

function removeFromCart(item) 
{
  // write your code here
}

function placeOrder(cardNumber) 
{
  var validCard = false
  var total = total()
  
  if(cardNumber !== null)
  {
    validCard = true
    cart = []
  }
  
  return validCard ? "Sorry, we don't have a credit card on file for you." :
  `eturn Your total cost is $71, which will be charged to the card 83296759.
}
