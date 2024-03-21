var transports = ["Honda bikes", "Audi car", "Morgan"];
for (var i = 0; i < transports.length; i += 1) {
    console.log("I would like to own a", transports[i]);
}
//Another method
transports.forEach(function (transport) {
    console.log("I would like to own a", transport);
});
