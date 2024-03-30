import '../../assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import PlacesView from './places'
import { AppProps } from '../../types/Props'
import Maps from './Map'

const App = (props: AppProps) => {
	const dataList = props.data
	const data = dataList.map(place => {
		return (
			<PlacesView
				key={place.id}
				id={place.id}
				name={place.name}
				address={place.address}
				url_image={place.url_image}
				url_map_google={place.url_map_google}
				type_place={place.type_place}
				type_plece_text={place.type_plece_text}
				ratings={place.ratings}
				url=""
			/>
		)
	})
	return (
		<main className="main-content">
			<Maps data={props.data} />
			<section>{data}</section>
		</main>
	)
}

export default App
