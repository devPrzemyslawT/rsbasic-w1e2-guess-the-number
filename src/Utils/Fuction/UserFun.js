export const minValue = 1;
export const maxValue = 10;
export let result;

export const RandomNumberInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const ValidAndCompare = inputValue => {
	let randomResult = RandomNumberInRange(minValue, maxValue);

	if (inputValue >= minValue && inputValue <= 10) {
		randomResult == inputValue
			? (result = `User Win C=${randomResult} vs
            U=${inputValue}`)
			: (result = `Computer Win C=${randomResult} vs
            U=${inputValue}`);
	} else {
		result = "Enter correct number!";
	}

	return result;
};
