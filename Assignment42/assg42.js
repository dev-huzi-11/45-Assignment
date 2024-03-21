var magician = ["Albert", "Rownie", "David"];
function show_magician(magician) {
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + " the Great";
    }
}
make_great(magician);
//   show_magician(magician);
