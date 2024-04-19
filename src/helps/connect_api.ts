import axios from 'axios'
import place from '../types/place'
import CommentsType from '../types/compoments'
import getTypePlace from './get_type_place'

// import.meta.env.VITE_API_KEY

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
	const currentURL = window.location.hostname
	let url
	console.log(currentURL == "localhost")
	if (currentURL != "localhost"){
		url= `${import.meta.env.VITE_LOCALE}places/`
	}else{
		
		url = `${import.meta.env.VITE_LOCALE}places/`
	}
	console.log(url)
	try {
		const response = await axios.get<place[]>(url)
		const placesData = response.data
		const placesWithRatings = await Promise.all(
			placesData.map(async element => {
				const type = getTypePlace(element.type_place)
				const id = element.url.slice(-2, -1)
				return {... element, id: id, type_plece_text: type}
			})
		)

		return placesWithRatings
	} catch (error) {
		console.error('Wystąpił błąd przy pobieraniu miejsc:', error)
		return []
	}
}

export const get_comments = async (): Promise<CommentsType[]> => {
	const url = 'https://dostepnyswiatdlawszystkich.pythonanywhere.com/api/comments/'
	try {
		const response = await axios.get<CommentsType[]>(url)
		const commentsData = response.data
		const data = [...commentsData]
		return data
	} catch (error) {
		console.error('Wystąpił błąd podczas pobierania komentarzy:', error)
		// Możesz zdecydować, czy zwracać pustą tablicę, czy propagować błąd dalej
		return [];
	}
}
