// 1) add an event listen to #click-me
// 2) store inputs as variables using .value method
// 3) (max age- age) * drinks per day * 365
// 4) output answers for the user to see

document.querySelector('#click-me').onclick = function () {


var currentAge = document.querySelector('#age').value;
	var maxAge = document.querySelector('#max-age').value;
	var favoriteDrink = document.querySelector('#item').value;
	var drinksPerDay = document.querySelector('#num-per-day').value;

	// 3)
	currentAge = parseInt(currentAge);
	maxAge = parseInt(maxAge);
	drinksPerDay = parseInt(drinksPerDay);

	var drinksLeft = (maxAge - currentAge) * drinksPerDay * 365;

	// 4)
	document.querySelector('#solution').innerHTML = drinksLeft;
	document.querySelector('#drink').innerHTML = favoriteDrink;
}