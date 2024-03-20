import '../../assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import PlacesView from './places'
import place from '../../types/place'
type AppProps = { data: place[] }

const App = (props: AppProps) => {
	const dataList = props.data
	const data = dataList.map(place => {
		return (
			<PlacesView
				key={place.id}
				id={place.id}
				name={place.name}
				adress={place.adress}
				url_img={place.url_imge}
				url_map_google={place.url_map_google}
				rating={place.score}
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
