// console.log("text");



let aqi = document.getElementById('aqi');

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);

let concern = document.getElementById('concern');
let effect = document.getElementById('effect');

function checkAirQuality() {
    console.log(aqi.value);
    document.getElementById('label').innerHTML = aqi.value;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${aqi.value}`;

    if (aqi.value <= 50) {
        document.getElementById('concern').innerHTML = 'Good';
        document.getElementById('effect').innerHTML = 'Little or no risk';
    } else if (aqi.value >= 50 && aqi.value <= 100) {
        document.getElementById('concern').innerHTML = 'Moderate';
        document.getElementById('effect').innerHTML = 'Acceptable quality';

    } else if (aqi.value >= 100 && aqi.value <= 150) {
        document.getElementById('concern').innerHTML = 'Unhealthy for sensitive groups';
        document.getElementById('effect').innerHTML = 'Generable publics not likely affected';
    }


}
