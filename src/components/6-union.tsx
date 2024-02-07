// Avoiding repetition by extracting in a new type + union (think of mongoose enum)
// backgroundColor and textColor are either red or green or blue.
type Color = "red" | "green" | "blue"

type ButtonProps = {
	backgroundColor: Color
	textColor: Color
	pillShape?: boolean
}

export default function Button({
	backgroundColor,
	textColor,
	pillShape,
}: ButtonProps) {
	console.log(backgroundColor, textColor, pillShape)
	return <button>Click me!</button>
}
