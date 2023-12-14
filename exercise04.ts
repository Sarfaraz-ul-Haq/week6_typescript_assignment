//Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

let productPrice = 200;
let discount;

if (productPrice <= 100) {
  discount = (productPrice * 5) / 100;
  console.log(discount);
} else {
  discount = (productPrice * 10) / 100;
  console.log(discount);
}
