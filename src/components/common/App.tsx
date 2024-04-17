import '../../assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import PlacesView from './places'
import { AppProps } from '../../types/Props'
import Maps from './Map'
import { useState } from 'react'
import place from '../../types/place'
import SearchPlaces from '../features/searchPlace'



const App = (props: AppProps) => {
	const dataList = props.data
	const [filteredData, setFilteredData] = useState<place[]>(dataList);

	const handleSearchResult = (results: place[]) => {
		setFilteredData(results); // Aktualizuj stan filtrowanych danych na podstawie wyników wyszukiwania
	  };
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
			<SearchPlaces data={filteredData} onSearchResult={handleSearchResult} />
			<Maps data={props.data} />
			<section>{data}</section>
		</main>
	)
}

export default App
