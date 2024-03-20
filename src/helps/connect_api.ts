import axios from 'axios'
import place from '../types/place'

type rating = {
	id: number
	score: number
	number_of_ratings: number
}

export const get_rating = async (url: string): Promise<rating[]> => {
	try {
		const response = await axios.get<rating[]>(url)
		return response.data
	} catch (error) {
		console.error('Wystąpił błąd przy pobieraniu ocen:', error)
		return []
	}
}

export const get_places = async (): Promise<place[]> => {
	const url = 'https://dostepnyswiatdlawszystkich.pythonanywhere.com/api/api/places/'
	try {
		const response = await axios.get<place[]>(url)
		const placesData = response.data

		const placesWithRatings = await Promise.all(
			placesData.map(async element => {
				const ratingsData = await get_rating(element.ratings)
				return { ...element, ...ratingsData }
			})
		)

		return placesWithRatings
	} catch (error) {
		console.error('Wystąpił błąd przy pobieraniu miejsc:', error)
		return []
	}
}

export const get_comments = () => {
	const url = 'https://dostepnyswiatdlawszystkich.pythonanywhere.com/api/api/comments/'
	
}
