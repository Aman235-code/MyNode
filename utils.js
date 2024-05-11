function generateRandomNo() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFaranheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

module.exports = { generateRandomNo, celciusToFaranheit }; // default export
