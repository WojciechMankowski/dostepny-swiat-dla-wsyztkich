import axios from 'axios'
import place from '../types/place'
import CommentsType from '../types/compoments'
import getTypePlace from './get_type_place'




export const get_places = async (): Promise<place[]> => {
	const currentURL = window.location.hostname
	let url
	if (currentURL == "localhost"){
		url = `${import.meta.env.VITE_LOCALE}places/`
	}else{
		url= `${import.meta.env.VITE_PRODUK}places/`
	}

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
