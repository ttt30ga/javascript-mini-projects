window.onload = () => {
	const btn = document.querySelector('.btn');
	btn.addEventListener('click', bmiCalculator);

	let year = new Date().getFullYear()
	document.querySelector('#footer').innerText = 'ð ð ðŠ ð ðĨ ðĨ' + '\n' + year
}

function bmiCalculator() {
	let height = document.querySelector('#height').value;
	let weight = document.querySelector('#weight').value;
	let result = document.querySelector("#result");

	let bmi = (weight / ((height * height) / 10000)).toFixed(1);

	if (bmi < 18.5) {
		result.innerText = 'Your BMI is ' + bmi + '\nYou are underweight ðŠķ'
	} else if (bmi > 18.5 && bmi < 24.9) {
		result.innerText = 'Your BMI is ' + bmi + '\nYou have a normal weight ð'
	} else if (bmi > 24.9) {
		result.innerText = 'Your BMI is ' + bmi + '\nYou are overweight ð°'
	}
}
