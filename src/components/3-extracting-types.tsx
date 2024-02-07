type ButtonProps = {
	backgroundColor: string
	textColor: string
	pillShape: boolean
}

function Button({ backgroundColor, textColor, pillShape }: ButtonProps) {
	console.log(backgroundColor, textColor, pillShape)
	return <button>Click me!</button>
}

export default Button

// Now this is more readable !
