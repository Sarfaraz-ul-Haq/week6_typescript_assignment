//Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

function calculateDiscount(productPrice: number): void {
  let discount;
  if (productPrice <= 100) {
    discount = (productPrice * 5) / 100;
    console.log(`5% discount: $${discount}`);
  } else {
    discount = (productPrice * 10) / 100;
    console.log(`10% discount: $${discount}`);
  }
}
//Now using "calculateDiscount" function
let priceOfProduct = 1000;
calculateDiscount(priceOfProduct); // 10% discount: $100

priceOfProduct = 50;
calculateDiscount(priceOfProduct); // 5% discount: $2.5
