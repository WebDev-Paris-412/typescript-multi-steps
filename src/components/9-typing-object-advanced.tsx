/**
 * If an object an unknown amount of key-value pairs
 * but they are always expected to have the same type
 * we could go from this
 */

type ButtonProps = {
	padding: {
		paddingTop: number
		paddingRight: number
		paddingBottom: number
		paddingLeft: number
	}
}

function DefaultButton({ padding }: ButtonProps) {
	console.log(padding)
	return <button>Button</button>
}
console.log(DefaultButton)
// To that

type ButtonPropsWithRecord = {
	// This is the first time we see a kind of "function" in TS
	// <> Act like the parentheses in JS, you will find arguments inside.
	// An object keys are always strings, if we expect the values to always be number, we could
	// Type it that way:
	padding: Record<string, number>
}
export default function Button({ padding }: ButtonPropsWithRecord) {
	console.log(padding)
	return <button>Button</button>
}
