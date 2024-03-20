import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Rating } from '@smastrom/react-rating'
import Place from '../components/features/place'
import '@smastrom/react-rating/style.css'
import place from '../types/place'

type AppProps = {
	data: place[]
	idPlace: number
	comment: string
	setIdPlace: Function
	setRating: Function
	setComment: Function
	userName: string
	setUserName: Function
	ratting: number
}

const Opinions = (props: AppProps) => {
	const [localRating, setLocalRating] = useState(props.ratting)

	const params = useParams()
	const _id = params.id
	const data = props.data.find(place => place.id.toString() === _id)

	useEffect(() => {
		if (data) {
			props.setIdPlace(data.id)
		}
	}, [data, props])

	useEffect(() => {
		props.setRating(localRating)
	}, [localRating, props.setRating])

	if (!data) return <div>Nie znaleziono miejsca.</div>

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
	}

	return (
		<div className="opinion">
			<Place {...data} rating={data.score} number_of_ratings={data.number_of_ratings} />
			<h3>Zostaw swoją opinię</h3>
			<form onSubmit={handleSubmit}>
				<Rating style={{ maxWidth: 250 }} value={localRating} onChange={setLocalRating} />
				<label htmlFor="userName">Twoje imię</label>
				<input
					name="userName"
					id="userName"
					value={props.userName}
					onChange={event => props.setUserName(event.currentTarget.value)}
				/>
				<label htmlFor="comment">Zostaw komentarz jak chcesz</label>
				<input
					name="comments"
					id="comments"
					value={props.comment}
					onChange={event => props.setComment(event.currentTarget.value)}
				/>
				<input type="submit" value="Dodaj opinię" className="submit" />
			</form>
		</div>
	)
}

export default Opinions
