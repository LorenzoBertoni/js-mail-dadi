let userNumber = Math.floor((Math.random() * 6) + 1);
console.log(userNumber);
document.getElementById('yourNumber').innerHTML = userNumber;

let computerNumber = Math.floor((Math.random() * 6) + 1);
console.log(computerNumber);
document.getElementById('computerNumber').innerHTML = computerNumber;

if (userNumber > computerNumber) {
    document.getElementById('result').innerHTML = 'HAI VINTO';
} else if (userNumber == computerNumber) {
    document.getElementById('result').innerHTML = 'PAREGGIO';
} else {
    document.getElementById('result').innerHTML = 'HA VINTO IL COMPUTER';
}