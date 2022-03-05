export default (number) => {
	if (number.startsWith(1)) {
		number = '+20' + number;
	} else if (number.startsWith(0)) {
		number = '+2' + number;
	}
	return number;
};
