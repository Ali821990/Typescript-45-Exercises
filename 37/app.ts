function make_shirt (size: string = "Excel", printMessage: string = "I Love Typescript") {
    console.log (`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

make_shirt()

make_shirt("Medium")

make_shirt("Small", "I Love Javascript")