var pizzas = ["Pepproni", "Margherita", "Hawaiian"];
console.log("Favourite pizzas");
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I love Pizza");
//Another method
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza"));
});
console.log("I reallly love pizza.");
