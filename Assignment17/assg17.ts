let guests: string[] = ["Saad", "Kashif", "Anees", "Muslim", "Akhtar", "Anees"];

console.log("Unfortunately, I can invite only two people");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, You are still invited`);
})

guests.splice(0, guests.length);
console.log(guests)