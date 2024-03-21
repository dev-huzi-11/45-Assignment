function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist one", "Album no one"));
console.log(make_album("Artist two", "Album no two"));
console.log(make_album("Artist three", "Album no three", 21));
