import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Rating } from '@smastrom/react-rating'
import Place from '../components/features/place'
import '@smastrom/react-rating/style.css'
import place from '../types/place'
import { update_ratings } from '../helps/add_value'

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
	const [localRating, setLocalRating] = useState<number>(props.ratting)
  
	const { id } = useParams<{ id: string }>()
	const data = props.data.find(place => place.id.toString() === id)
	const ratings = data?.ratings[0]
  
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
	  if (ratings) {
		const { id, score, number_of_ratings } = ratings
		const how = number_of_ratings + 1
		const new_score = (score * number_of_ratings + localRating) / how
		update_ratings(id, new_score, how)
	  }
	}
  
	return (
	  <div className="opinion">
		<Place 
		id={data.id}
		name= {data.name} 
		address= {data.address} 
		url_img= {data.url_imge} 
		url_map_google= {data.url_map_google} 
		number_of_ratings= {ratings?.number_of_ratings} 
		rating= {ratings?.score} 
	
		/>
		<h3>Zostaw swoją opinię</h3>
		<form onSubmit={handleSubmit} method='put'>
		  <Rating
			style={{ maxWidth: 250 }} value={localRating} onChange={setLocalRating}
		  />
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
