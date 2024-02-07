import React, { ComponentProps } from "react"
type BasicButtonProps = ComponentProps<"button">

type ButtonProps = BasicButtonProps & { variant: string }

function Button({ variant }: ButtonProps) {
	console.log(variant)
	return <div>Button</div>
}

export default Button

// Here is the same notation with an interface

interface IBasicButtonProps extends ComponentProps<"button"> {
	variant: string
}
