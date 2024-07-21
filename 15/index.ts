let guestList = [ "Abdullah", "Faisal", "Bilal"];

let notComing = guestList[1];

console.log (notComing, "is not coming");

guestList.splice(1, 1, "Altaf");

guestList.forEach(guest => console.log (`Hy, ${guest}, Would you like to come at dinner ?`))

