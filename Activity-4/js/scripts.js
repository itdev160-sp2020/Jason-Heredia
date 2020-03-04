// welcome message
var user = 'Jason';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Air58 Mouse reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// product price
var price = 150,
        studentDiscount = .10,
        studentPrice = price - (price * studentDiscount),
        priceEl = document.getElementById('price'),
        studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);