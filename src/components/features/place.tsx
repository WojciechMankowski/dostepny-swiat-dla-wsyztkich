import placesPropsType from '../../types/places'
import Img from '../common/Img'
const Place = (props: placesPropsType) => {
	return (
		<div className="place">
			<Img img={props.url_img} alt="zdjęcie" />

			<div className="address_data">
				<h3>{props.name}</h3>
				<p>{props.address}</p>
				<a href={props.url_map_google} target="blank">
					Adres do mapy Google
				</a>
			</div>
		</div>
	)
}

export default Place 
