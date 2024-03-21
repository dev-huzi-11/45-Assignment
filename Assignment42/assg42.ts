let magician: string[] = ["Albert", "Rownie", "David"];

function show_magician(magician: string[]) {
    magician.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magician: string[]) {
    for (let i = 0; i < magician.length; i++) {
      magician[i] = magician[i] + " the Great";
    }
  }
  
  make_great(magician); 
  show_magician(magician);
  