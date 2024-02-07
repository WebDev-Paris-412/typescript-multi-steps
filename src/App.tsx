import { useState } from "react"
import "./App.css"
import { Button2, OtherButton2 } from "./components/2-typing-props"
import Button3 from "./components/3-extracting-types"
import Button4 from "./components/4-optional-types"
import Button5 from "./components/5-component-return-type"
import Button6 from "./components/6-union"
import {
	ButtonTypedWithArray,
	ButtonTypedWithTuple,
} from "./components/7-typing-arrays"
import Button8 from "./components/8-All-Css-properties"
import Button9 from "./components/9-typing-object-advanced"
import Button10 from "./components/10-typing-functions"
import Button11 from "./components/11-typing-children"
import Button13 from "./components/13-attribute-props"

function App() {
	return (
		<>
			{/* Iteration 2 Typing props */}
			<Button2 backgroundColor="red" textColor="blue" pillShape={true} />
			<OtherButton2 backgroundColor="red" textColor="blue" pillShape={true} />

			{/* Iteration 3 Extracting type */}
			{/* If you remove one of the props in the Button component next, and press Command + I, you will have the 
    auto suggestion prompting you the available props!*/}
			<Button3 backgroundColor="red" textColor="blue" pillShape={true} />

			{/* Iteration 4 optional type */}
			<Button4 backgroundColor="red" textColor="blue" pillShape={true} />
			<Button4 backgroundColor="red" textColor="blue" />

			{/* Iteration 5 return value of a component */}
			<Button5 />

			{/* Iteration 6 union */}
			<Button6 backgroundColor="red" textColor="green" />
			{/* <Button6 backgroundColor="magenta" textColor="green" /> Magenta is not part of our Color type!*/}

			{/* Iteration 7 typing array / tuple */}
			<ButtonTypedWithArray padding={[5, 3, 7, 2]} />
			<ButtonTypedWithArray padding={[5, 3, 7, 2, 10, 99, 25, 3]} />
			<ButtonTypedWithTuple padding={["rem", 3, 7, 2, 10]} />
			{/* <ButtonTypedWithTuple padding={[3, 7, 2, 10]} /> This tuple explicitely expect a string followed by 4 number */}

			{/* Iteration 8 using helper types */}
			<Button8
				style={{
					boxShadow: "5px 5px 2px black",
					padding: ".5rem 1rem",
					zIndex: 999,
					//...
				}}
			/>

			{/* Iteration 9 standardizing object type */}
			<Button9 padding={{ paddingBottom: 5, paddingTop: 3 }} />

			{/* Iteration 10 Check Iteration 10 component below, typing a function */}
			<Iteration10 />

			{/* Iteration 11 typing children */}
			<Button11>Click me !</Button11>

			{/* Iteration 12
			interface only work when typing objects.
			Since you will have to create types using non object with type,
			let's just focus on type, standardize it and just know that interface do exist
			they just don't solve any issue.
			*/}

			{/* Iteration 13
			An HTML element hold a lot of attributes (href, src, alt, data-* ...)
			If you create a component which is wrapping an element (say our numerous Button components)
			it could be nice to get all of those attributes as props on the component itself!
			*/}
			<Button13 type="submit" disabled={false} variant={"big"} />

			{/* Iteration 14 typing state */}

			<Iteration14 />
		</>
	)
}

function Iteration10() {
	const [count, setCount] = useState(0)
	console.log(count)
	// Most important part of this iteration (and of typescript):
	// Use your mouse.
	// If you hover over setCount, you will see the it's type.
	// It's a lot.
	// It's ok.
	// You just need to hover to see it.

	const sayHi = (name: string) => {
		return `Hi ${name}`
	}

	return <Button10 onClick={setCount} callback={sayHi} />
}

type User = {
	username: string
	_id: string
	age: number
}
function Iteration14() {
	// Since we don't know the user at first, we declare it as null, hence user is either User or null
	const [user, setUser] = useState<User | null>(null)
}

export default App
