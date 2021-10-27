function fruitShop(fruit, day, quantity) {
  fruit = fruit.toLowerCase();
  day = day.toLowerCase();
  quantity = Number(quantity);
  let weekday =
    day == "monday" ||
    day == "tuesday" ||
    day == "wednesday" ||
    day == "thursday" ||
    day == "friday";
  let weekend = day == "saturday" || day == "sunday";
  if (weekday) {
    if (fruit == "banana") {
      console.log(Math.round((2.5 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "apple") {
      console.log(Math.round((1.2 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "orange") {
      console.log(Math.round((0.85 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "grapefruit") {
      console.log(Math.round((1.45 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "kiwi") {
      console.log(Math.round((2.7 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "pineapple") {
      console.log(Math.round((5.5 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "grapes") {
      console.log(Math.round((3.85 * quantity + Number.EPSILON) * 100) / 100);
    } else {
      console.log("error");
    }
  } else if (weekend) {
    if (fruit == "banana") {
      console.log(Math.round((2.7 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "apple") {
      console.log(Math.round((1.25 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "orange") {
      console.log(Math.round((0.9 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "grapefruit") {
      console.log(Math.round((1.6 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "kiwi") {
      console.log(Math.round((3 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "pineapple") {
      console.log(Math.round((5.6 * quantity + Number.EPSILON) * 100) / 100);
    } else if (fruit == "grapes") {
      console.log(Math.round((4.2 * quantity + Number.EPSILON) * 100) / 100);
    } else {
      console.log("error");
    }
  } else if (quantity == 0) {
    console.log("error");
  } else {
    console.log("error");
  }
}

fruitShop("apple", "Tuesday", 2);
fruitShop("orange", "Sunday", 3);
fruitShop("kiwi", "Monday", 2.5);
fruitShop("grapes", "Saturday", 0.5);
fruitShop("tomato", "Monday", 0.5);
