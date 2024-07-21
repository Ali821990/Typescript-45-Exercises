let currentUsers = ["Ali", "Amna", "Imran", "Kamran", "Bilal"];

let newUsers = ["Mohsin", "Ahsan", "Misbah", "ALI", "Shamim"];

newUsers.forEach(newOne => {
    let myCondition = currentUsers.some(currentOne => currentOne.toLowerCase() === newOne.toLowerCase())

if (myCondition) {
    console.log (`Sorry ${newOne} is already taken! Please try again with new name.`)

} else {
    console.log (`This username ${newOne}, is available.`)

}
})


    

