function make_album (artistName: string, albumName: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artistName,
        title: albumName,
    };
if (tracks !== undefined){
    album.tracks = tracks;
}

return album;

}

let album1 = make_album("Shayan", "Album Title 1")

let album2 = make_album("Waleed", "Album Title 2")

let album3 = make_album("Rauf", "Album Title 3", 5)

console.log (album1);

console.log (album2);

console.log (album3);
