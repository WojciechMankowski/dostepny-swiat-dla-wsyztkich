import { Link } from 'react-router-dom'
import Img from './Img'
import { BiStar } from 'react-icons/bi' // gwiazda pusta
import { FaStar } from 'react-icons/fa' // gwiazda pełna
import place from '../../types/place'

const PlacesView = (props: place) => {
	const id = props.id.toString()
	const url = '/opinia/' + id
	const url_comment = '/komentarze/' + id
	const rating = 5 - Math.floor(props.ratings[0].score)
	const ratigList = Array(rating).fill('test')
	const ratigListFill = Array(Math.floor(props.ratings[0].score)).fill('test')
	const ratingHTMLNotFill: JSX.Element[] = []
	const ratingHTML: JSX.Element[] = []

	ratigList.forEach((_, index) => {
		ratingHTMLNotFill.push(<BiStar className="star" key={index} />)
	})
	ratigListFill.forEach((_, index) => ratingHTML.push(<FaStar className="star starFile"
	 key={index} />))
	return (
		
		<div className="placeView">
			<Img img={props.url_imge} alt={props.name} />
			<div className="address_data">
				<h3>{props.name}</h3>
				{ratingHTML}
				{ratingHTMLNotFill}
				<span >Ocena: {props.ratings[0].score} </span>
				<span> Liczba ocen: {props.ratings[0].number_of_ratings}</span>
				<p>Typ miejsca: {props.type_plece_text}</p>
				<p>{props.adress}</p>
				<a href={props.url_map_google} target="blank">
					Adres do mapy Google
				</a>
				<Link to={url}>Zostaw swoją opinię</Link>
				<Link to={url_comment}>Zobacz komentarze</Link>
			</div>
		</div>
	)
}

export default PlacesView
