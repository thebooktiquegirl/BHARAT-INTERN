
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

function updateValues() {
    const c = parseFloat(celsius.value);
    fahrenheit.value = (c * 9/5) + 32;
    kelvin.value = c + 273.15;
}

celsius.addEventListener('input', updateValues);
fahrenheit.addEventListener('input', () => {
    const f = parseFloat(fahrenheit.value);
    celsius.value = (f - 32) * 5/9;
    kelvin.value = (f - 32) * 5/9 + 273.15;
});
kelvin.addEventListener('input', () => {
    const k = parseFloat(kelvin.value);
    celsius.value = k - 273.15;
    fahrenheit.value = (k - 273.15) * 9/5 + 32;
});

// Initial conversion
updateValues();
