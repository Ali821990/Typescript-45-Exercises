function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Doctor Strange", "Dumbledoor", "Harry Potter"];
var copy_magicians_names = magician_names.slice();
var copy_great_magicians = make_great(copy_magicians_names);
console.log("\nOriginal Array\n");
show_magicians(magician_names);
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
