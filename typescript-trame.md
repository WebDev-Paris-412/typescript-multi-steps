# Typescript with React

## Typing variables

Typing a primitive variable is rarely done. It is usually just infered.

## Typing functions

Simple arguments can be typed in-line.
We can as well specify a return type, this is rarely used.

## Typing React components

### Typing props

We typically just need to type the props.
Destructuring is prefered.
As long as there is not too many props, inline types are fine.
If more props are added -> Extraction into a separate Type is preferred.

### Extracting type

```ts
type TypeName = // In our case it's an object (props)
```

### Benefits of TypeScript

Autocompletion for props when declaring :)
Available methods are validated, can't use toUpperCase on a number can you?

### Optional

Some props might be optional?

```ts
type MyType = {
	aValue: boolean
	optionalValue?: string
}
```

### 'any' type

Just don't. Why use TypeScript if anything goes?

### Type return value of component?

They are infered, we don't have to type them.

### Union type

Union is like mongoose's enum.

```ts
type Color = "red" | "green" | "blue"
```

### Extracting duplicate type

Always useful to be able to change something in one place.

### Typing arrays

The verlan of typescript.

```ts
const names: string[] = ["bob", "illiu"]
```

### Tuple type

An Array but not exactly. (Specified length and types)

### React.CSSProperties

Most of the example were probably about CSS values.
Instead of adding all of them manually, they could be given to the Element as an Object using the style attribute.

```ts
type MyProps = {
	style: {
		//...
	}
}
```

Would be cumbersome to add all of them manualy.

```ts
type MyProps = {
	style: React.CSSProperties
}
```

### Record type

When receiving an object with key-value pairs of expected type
Record makes it easy

```ts
Record<string, number>
//or
[string]: number
```

### Typing passed functions

Using arrow function, describing arguments and return value

### Typing children (React.ReactNode)

Allow everything as children

### React.JSX.Element vs React.ReactNode

Create restrictions on what children can be

### Typing useState setter function

It's intimidating. Using the mouse does wonder.

### Default prop values

Infered :)

### Type Alias vs Interface

Type can handle pretty much everything.
Interface can only be declarared as Object.
Since you'll have to use type (for union etc)
Better to just stick to type as the reference :)

### ComponentPropsWithoutRef

HTML attributes are numerous.
ComponentProps act as a function
ComponentPropsWithoutRef is prefered if no ref are given.

### ...rest and ...spread

Makes everything much more zen.

### Intersection (&)

The reason for the existence of interface basically.

### Interface extends

Just like a class

### Typing event handler functions

Use your mouse 2.0

### Typing useState hook again

Unecessary.
Unless we have an object a good example is something which is initialized as null
Lead to optional chaining.

### As const

Freezing data.

## Generics

That's an entire new topic and out of the scope right now.
It is hard to wrap your head around but not as hard as it can be said.
