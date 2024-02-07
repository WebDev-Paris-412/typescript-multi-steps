// Here amount is expected to be a number but it could be anything, an object a function, who knows?!
// function convertToCurrency(amount, currency) {}

// Simple arguments can be typed in-line. We can as well specify a return type, this is rarely used.

function convertToCurrency(amount: number, currency: string): string {
	return `${amount}${currency}`
}

convertToCurrency(5, "eur")
// convertToCurrency('5', '$') -> Error because amount is a string.
