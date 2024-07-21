function show_magicians (magicians: string []){
    magicians.forEach(name => console.log (name));

}
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magicianNames = ["Doctor Strange", "Harry Potter", "Shang Chi"]

let greatMagicians = make_great (magicianNames)

console.log (greatMagicians)


