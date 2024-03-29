/**
 * from : https://stackoverflow.com/questions/18758772/how-do-i-validate-a-date-in-this-format-yyyy-mm-dd-using-jquery/18759013
 * @param {*} dateString
 * @returns true if date valid, false if invalid
 */
const isValidDate = (dateString) => {
	const regEx = /^\d{4}-\d{2}-\d{2}$/;
	if(!dateString.match(regEx)) return false; // Invalid format
	const d = new Date(dateString);
	const dNum = d.getTime();
	if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
	return d.toISOString().slice(0, 10) === dateString;
};

module.exports = { isValidDate };