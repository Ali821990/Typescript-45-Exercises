function makeSandwich (... items: string []){
    console.log ("\nMaking a sandwich with the following items: \n");
    items.forEach (item1 => console.log (item1));   

    console.log ("\nNow enjoy sandwich");
}

makeSandwich ("Chicken, Cheese, Butter")

makeSandwich ("Garlic", "Butter", "Mayo", "Pepparoni")

makeSandwich ("Malai Boti", "Bihari Boti", "Beaf", "Hunter Beaf")