var personName = "Muhammad imran";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (Save) { return Save.toUpperCase(); }));
