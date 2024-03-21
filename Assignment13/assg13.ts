let transports: string[] = ["Honda bikes", "Audi car", "Morgan"];

for (let i = 0; i < transports.length; i += 1) {
    console.log("I would like to own a", transports[i])   
}
//Another method

transports.forEach(transport => {
    console.log("I would like to own a", transport)
})