function make_album(artistName, albumName, tracks) {
    var album = {
        artist: artistName,
        title: albumName,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Shayan", "Album Title 1");
var album2 = make_album("Waleed", "Album Title 2");
var album3 = make_album("Rauf", "Album Title 3", 5);
console.log(album1);
console.log(album2);
console.log(album3);
