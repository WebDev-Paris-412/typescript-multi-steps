type ButtonProps = {
	padding: number[]
}

export function ButtonTypedWithArray({ padding }: ButtonProps) {
	console.log(padding)
	return <button>Click me</button>
}

type ButtonPropsTuple = {
	padding: [string, number, number, number, number]
}
// Tuple are like Arrays, just a bit more specific in regard to what they include.
export function ButtonTypedWithTuple({ padding }: ButtonPropsTuple) {
	console.log(padding)
	return <button>Click me</button>
}
