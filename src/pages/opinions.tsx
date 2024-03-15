import { useParams } from 'react-router-dom'
import placesPropsType from '../types/places'
import { useState, useEffect } from 'react'
import { Rating } from '@smastrom/react-rating'
import Place from '../components/features/place'
import '@smastrom/react-rating/style.css'

type AppProps = {
	data: placesPropsType[]
	idPlace: number
	ratting: number
	comment: string
	setIdPlace: Function
	setRating: Function
	setComment: Function
	userName: string
	setUserName: Function
}

const Opinions = (props: AppProps) => {
	const [ratting, setRating] = useState(0)

	const params = useParams()
	const _id = params.id
	let data = props.data
	data = data.filter(place => {
		const id = place.id.toString()
		return id == _id
	})
	const datas = data[0]

	useEffect(() => {
		props.setIdPlace(datas.id)
	}, [])

	useEffect(() => {
		props.setRating(ratting)
	}, [ratting])

	return (
		<div className="opinion">
			<Place
				id={datas.id}
				name={datas.name}
				adress={datas.adress}
				url_img={datas.url_img}
				url_map_google={datas.url_map_google}
			/>
			<h3>Zostaw swoją opinię</h3>
			<form>
				<Rating style={{ maxWidth: 250 }} value={props.ratting} onChange={setRating} />
				<label htmlFor="userName">Twoje imię</label>

				<input
					name="userName"
					id="userName"
					onChange={(event: React.FormEvent<HTMLInputElement>) => {
						props.setUserName(event.currentTarget.value)
					}}
				/>
				<label htmlFor="comment">Zostaw komentarz jak chceszcz</label>

				<input
					name="comments"
					id="comments"
					onChange={(event: React.FormEvent<HTMLInputElement>) => {
						props.setComment('')
						props.setComment(event.currentTarget.value)
					}}
				/>
				<input type="submit" value="Dodaj opinię" className="submit" />
			</form>
		</div>
	)
}

export default Opinions
