import React, { useEffect, useState } from 'react'
import { APIProvider, Map, InfoWindow, AdvancedMarker } from '@vis.gl/react-google-maps'
import fetchCoordinates from '../../helps/get_corordinates'

interface MapsProps {
	addresses: string[]
}

interface Coor {
	lat: number
	lng: number
}

const Maps: React.FC<MapsProps> = ({ addresses }) => {
	const [markers, setMarkers] = useState<Coor[]>([])
	const [selectedMarker, setSelectedMarker] = useState<Coor | null>(null)

	useEffect(() => {
		const getCoordinates = async () => {
			const coordinates: Coor[] = await fetchCoordinates(addresses)
			setMarkers(coordinates)
		}

		getCoordinates()
	}, [addresses])

	const handleMarkerClick = (marker: Coor) => {
		setSelectedMarker(marker)
	}
	const mark = markers.map((marker, index) => (
		<AdvancedMarker
			key={index}
			position={{ lat: marker.lat, lng: marker.lng }}
			//   onClick={() => handleMarkerClick(marker)}
		></AdvancedMarker>
	))
	return (
		<APIProvider apiKey="AIzaSyBYDgXMcNfyI1pMmz7dN0228-yGIL9lp8c">
			<div className="map">
				<Map zoom={12} center={{ lat: 54.35, lng: 18.6333 }} mapId={'<Your custom MapId here>'}>
					<AdvancedMarker
						// className={customMarker}
						position={{ lat: 53.54992, lng: 10.00678 }}>
						<h2>I am so customized</h2>
						<p>That is pretty awesome!</p>
					</AdvancedMarker>
					{mark}
				</Map>
			</div>
		</APIProvider>
	)
}

export default Maps
