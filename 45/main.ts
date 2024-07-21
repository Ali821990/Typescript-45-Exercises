function createCar (manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    }; 
    options.forEach(option => {
        let [key, value] = option.split (":");
        car [key.trim()] = value.trim ();
    });

    return car;
}

let my_car = createCar ("Honda", "Civic", "Color : White", "Sunroof : True", "Year : 2024");

console.log (my_car);

