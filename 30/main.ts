let userNames = [ "Admin", "Ali", "Shayan", "Waleed", "Rauf"];

userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log (`Hello ${oneUser}, would you like see a status report?`)

    } else {
        console.log (`Hello ${oneUser}, thank you for logging in again.`)
    }
  })