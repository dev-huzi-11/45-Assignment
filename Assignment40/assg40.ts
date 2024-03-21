function make_album(artist: string, title: string, tracks?: number) {
    let album = {artist, title};
    if (tracks) {
       (album as {artist: string; title: string; tracks: number}).tracks  = tracks;
    }
    return album
}

console.log(make_album("Artist one", "Album no one"));
console.log(make_album("Artist two", "Album no two"));
console.log(make_album("Artist three", "Album no three", 21));



