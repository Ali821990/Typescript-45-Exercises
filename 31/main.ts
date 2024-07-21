let userNames = ["Admin", "Ali", "Shayan", "Waleed", "Rauf"];

if (userNames.length === 0){
    console.log ("Your array is empty, We need to find some users.")

} else {
    userNames.forEach (oneUser => {
        if (oneUser === "Admin") {
            console.log (`Hello ${oneUser}, Would you like to see a status report?`)
        } else {
            console.log (`Hello ${oneUser}, Thank you for logging in again.`)
        }
    }
    )}


