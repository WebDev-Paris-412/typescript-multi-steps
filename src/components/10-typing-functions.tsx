import React from "react"

type ButtonProps = {
	// If you don't know where this is coming from, read from line 67 in app.tsx
	onClick: React.Dispatch<React.SetStateAction<number>>

	callback: (arg: string) => string
}

function Button({ onClick, callback }: ButtonProps) {
	console.log(onClick, callback("Suzie"))
	return <div>Button</div>
}

export default Button
