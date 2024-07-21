var currentUsers = ["Ali", "Amna", "Imran", "Kamran", "Bilal"];
var newUsers = ["Mohsin", "Ahsan", "Misbah", "ALI", "Shamim"];
newUsers.forEach(function (newOne) {
    var myCondition = currentUsers.some(function (currentOne) { return currentOne.toLowerCase() === newOne.toLowerCase(); });
    if (myCondition) {
        console.log("Sorry ".concat(newOne, " is already taken! Please try again with new name."));
    }
    else {
        console.log("This username ".concat(newOne, ", is available."));
    }
});
