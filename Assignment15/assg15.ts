let guests: string[] = ["Mamo", "Phuppo", "khala"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
})

let unable_toattend: string = "Phuppo"
console.log(unable_toattend, "can't make it to dinner");

let newGuest:string = "Chachi"
guests[guests.indexOf(unable_toattend)] = newGuest

guests.forEach(guest => {
    console.log(`Dear ${guest} would you like to join me for diner`);
})
