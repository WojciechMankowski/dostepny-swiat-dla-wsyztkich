type Props = {
	type: string
	setValue: Function
	name: string
	value: string | number
	id: string
	class: string
}

const Input = (props: Props) => {
	const setCommnestr = (event: React.FormEvent<HTMLInputElement>) => {
		console.log(event.currentTarget.value)
		props.setValue({
			comments: event.currentTarget.value,
		})
	}

	return (
		<input
			type={props.type}
			name={props.name}
			value={props.value}
			onChange={setCommnestr}
			id={props.id}
			className={props.class}
		/>
	)
}
export default Input
