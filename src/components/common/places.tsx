import { Link } from 'react-router-dom'
import placesPropsType from '../../types/places'
import Img from './Img'

const PlacesView = (props: placesPropsType) => {
	const id = props.id.toString()
	const url = '/opinia/' + id
	const url_comment = '/komentarze/' + id
	return (
		<div className="placeView">
			<Img img={props.url_img} alt="zdjęcie" />

			<div className="address_data">
				<h3>{props.name}</h3>
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
