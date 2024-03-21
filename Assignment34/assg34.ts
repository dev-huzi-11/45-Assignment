let pizzas: string[] =["Pepproni", "Margherita", "Hawaiian"];

console.log("Favourite pizzas")
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I love Pizza");


//Another method
pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza`)
})

console.log("I reallly love pizza.")