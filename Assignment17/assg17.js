var guests = ["Saad", "Kashif", "Anees", "Muslim", "Akhtar", "Anees"];
console.log("Unfortunately, I can invite only two people");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner"));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are still invited"));
});
guests.splice(0, guests.length);
console.log(guests);
