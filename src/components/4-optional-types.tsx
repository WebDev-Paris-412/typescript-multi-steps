type ButtonProps = {
	backgroundColor: string
	textColor: string
	pillShape?: boolean
}
// PillShape is now optional!

export default function Button({
	backgroundColor,
	textColor,
	pillShape,
}: ButtonProps) {
	console.log(backgroundColor, textColor, pillShape)
	return <button>Click me!</button>
}
