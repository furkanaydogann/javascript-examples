const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');


function calculateTemp(event) {

    const currentValue = +event.target.value;

    switch (event.target.name) {
        case 'celsius':
            kelvin.value = (currentValue + 273.32).toFixed(2);
            fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);   
            break;
        case 'fahrenheit':
            kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
            break;
        case 'kelvin':
            celsius.value = (currentValue - 273.32).toFixed(2);
            fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
    
        default:
            break;
    }
}