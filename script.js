function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType= crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni","sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms","olives","onions"]);

var p3 = pizzaOven("thin crust", "white sauce", "parmesan", "tomatoes");
var p4 = pizzaOven("deep dish", "marinara", ["feta","mozzarella, brie"], ["chicken","pepperoni","sausage"]);

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)

// function randomPizza (){
//     Math.random();
// }