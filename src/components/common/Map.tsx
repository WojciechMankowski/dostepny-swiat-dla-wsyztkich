import React, { useEffect, useState } from 'react'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { setKey, setLanguage, setRegion, fromAddress } from 'react-geocode'

interface MapsProps {
	addresses: string[]
}

const Maps: React.FC<MapsProps> = ({ addresses }) => {
	const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([])
	const [hoveredMarker, setHoveredMarker] = useState<number | null>(null)
	useEffect(() => {
		const fetchCoordinates = async () => {
			try {
				setKey('AIzaSyBYDgXMcNfyI1pMmz7dN0228-yGIL9lp8c') // Replace 'YOUR_API_KEY' with your actual API key
				setLanguage('pl')
				setRegion('pl')

				const promises = addresses.map(async address => {
					const response = await fromAddress(address)
					const { lat, lng } = response.results[0].geometry.location
					return { lat, lng }
				})

				const markersData = await Promise.all(promises)
				setMarkers(markersData)
			} catch (error) {
				console.error('Error fetching coordinates:', error)
			}
		}

		fetchCoordinates()
	}, [addresses])
	const handleMarkerHover = (index: number | null) => {
		setHoveredMarker(index)
	}

	return (
		<APIProvider apiKey={'AIzaSyBYDgXMcNfyI1pMmz7dN0228-yGIL9lp8c'}>
			<div className="map">
				{markers.length > 0 ? (
					<Map
						// style={{ width: '100%', height: '100%' }}
						defaultCenter={markers[0]}
						defaultZoom={10}
						gestureHandling="greedy"
						disableDefaultUI>
						{markers.map((marker, index) => (
							<Marker
								key={index}
								position={marker}
								title={`Location ${index + 1}`}/>
						))}
					</Map>
				) : (
					<p>Loading...</p>
				)}
			</div>
		</APIProvider>
	)
}

export default Maps
