let guests: string[] = ["Saad", "Kashif", "Anees"];
console.log("I found a bigger dinnner table");

guests.unshift("Zeeshan");
guests.splice(guests.length /2, 0, "Muslim");
guests.push("Akhtar");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner`);
})
