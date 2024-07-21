function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (item1) { return console.log(item1); });
    console.log("\nNow enjoy sandwich");
}
makeSandwich("Chicken, Cheese, Butter");
makeSandwich("Garlic", "Butter", "Mayo", "Pepparoni");
makeSandwich("Malai Boti", "Bihari Boti", "Beaf", "Hunter Beaf");
