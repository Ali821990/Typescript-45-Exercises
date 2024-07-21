function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicianNames = ["Doctor Strange", "Harry Potter", "Shang Chi"];
var greatMagicians = make_great(magicianNames);
console.log(greatMagicians);
