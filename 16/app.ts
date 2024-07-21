let guestList = [ "Abdullah", "Shoaib", "Faisal", "Bilal"];

let notComing = guestList [1];

console.log (notComing, "Is not coming");

guestList.splice (1, 1, "Altaf");

console.log ("Good News! We have found a bigger table for a dinner"); 

guestList.unshift("Junaid")

guestList.push ("Zohaib");

let middleIndex = (guestList.length / 2);

guestList.splice(middleIndex, 0, "Rizwan");

console.log ("Updated list of our Guests");

guestList.forEach (oneguest => console.log (`Hy, ${oneguest}, Would you like to come at dinner ?`))


