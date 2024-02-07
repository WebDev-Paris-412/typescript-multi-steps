import React from "react"
// From that:
// type ButtonProps = {
//   style: {
//     backgroundColor:...
//     padding:...
//     borderRadius:...
//     boxShadow...
//     ...
//     ...
//   }
// }
//To this:

type ButtonProps = {
	style: React.CSSProperties
}

// React comes with helper types that some dev took the time to build lovingly.

function Button({ style }: ButtonProps) {
	return <button style={style}>Button</button>
}

export default Button
