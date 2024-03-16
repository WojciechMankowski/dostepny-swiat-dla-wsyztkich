import { Link } from 'react-router-dom'
import placesPropsType from '../../types/places'
import Img from './Img'
import { BiStar } from 'react-icons/bi' // gwiazda pusta
import { FaStar } from 'react-icons/fa'
import { FaS } from 'react-icons/fa6'

const PlacesView = (props: placesPropsType) => {
	const id = props.id.toString()
	const url = '/opinia/' + id
	const url_comment = '/komentarze/' + id
	const rating = 5 - props.rating
	const ratigList = Array(rating).fill('test')
	const ratigListFill = Array(props.rating).fill('test')
	const ratingHTMLNotFill: JSX.Element[] = []
	const ratingHTML: JSX.Element[] = []
	ratigList.forEach((_, index) => {
		ratingHTMLNotFill.push(<BiStar className="star" key={index} />)
	})

	ratigListFill.forEach((_, index) => ratingHTML.push(<FaStar className="star starFile" key={index} />))

	return (
		<div className="placeView">
			<Img img={props.url_img} alt="zdjęcie" />
			<div className="address_data">
				<h3>{props.name}</h3>
				{ratingHTML}
				{ratingHTMLNotFill}
				<span> Liczba ocen: {props.number_of_ratings}</span>
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
