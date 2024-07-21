var guestList = ["Abdullah", "Faisal", "Bilal"];
var notComing = guestList[1];
console.log(notComing, "is not coming");
guestList.splice(1, 1, "Altaf");
guestList.forEach(function (guest) { return console.log("Hy, ".concat(guest, ", Would you like to come at dinner ?")); });
