let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const property in statistics) 
{
    const value = statistics[property]; //Gets teh value related to the current property.

    if (property.startsWith('r') || value % 2 !== 0) //If the property name starts with r or has an odd value
    {
        console.log(value); // If either condition is true, print the value
}
    }
