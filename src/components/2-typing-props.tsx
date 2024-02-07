/**
 * Inline typing becomes messy quite quickly
 */

export function Button2(props: {
	backgroundColor: string
	textColor: string
	pillShape: boolean
}) {
	console.log(props)
	return <button>Click me!</button>
}

/**
 * Especially if we use destructuring!
 */

export function OtherButton2({
	backgroundColor,
	textColor,
	pillShape,
}: {
	backgroundColor: string
	textColor: string
	pillShape: boolean
}) {
	console.log(backgroundColor, textColor, pillShape)
	return <button>Click me!</button>
}

// Let's extract those inline types
