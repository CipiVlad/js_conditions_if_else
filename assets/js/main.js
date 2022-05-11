// console.log("text");

// ------lvl 2_2 ---checkAirQuality() ---------------------

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




// ------lvl 2_3 ---getDifference ---------------------
let num = 27;
let a = 35;
// let a = 74;
// let a = 123;


function getDifference() {

    let result = a - num;

    if (a > num) {
        result = result * 2;
    } else {
        console.log(result);
    }

    console.log(result);

}
getDifference();



// ------lvl 2_4 --getTotal---------------------

function getTotal(a, b) {
    let total = a + b;
    console.log(total)

    if (a == b) {
        total = total * 5;
        console.log(total);
    } else {
        console.log(total);
    }
}
// getTotal(2, 4);
getTotal(5, 5);