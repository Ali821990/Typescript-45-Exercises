var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favCountries = ["Makkah", "Madina", "Iraq", "Turkey", "India"];
console.log("Original Order", favCountries);
console.log("Alphabetical Order:", __spreadArray([], favCountries, true).sort());
console.log("Still in original order:", favCountries);
console.log("Reverse Alphabetical Order:", __spreadArray([], favCountries, true).reverse());
console.log("Original Order", favCountries);
console.log("Original order Reversed:", favCountries.reverse());
console.log("Back to Original Order:", favCountries.reverse());
console.log("Sort in Alphabetical order:", favCountries.sort());
console.log("Original order Reversed Again:", favCountries.reverse());
