import '../../assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import PlacesView from './places'
import placesPropsType from '../../types/places'

type AppProps = { data: placesPropsType[] }

const App = (props: AppProps) => {
	const dataList = props.data
	const data = dataList.map(place => {
		return (
			<PlacesView
				key={place.id}
				id={place.id}
				name={place.name}
				adress={place.adress}
				url_img={place.url_img}
				url_map_google={place.url_map_google}
				rating={place.rating}
				number_of_ratings={place.number_of_ratings}
			/>
		)
	})
	return (
		<main className="main-content">
			<section>{data}</section>
		</main>
	)
}

export default App
