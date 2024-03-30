type place = {
	id: number | string
	name: string
	address: string
	url_image: string
	url_map_google: string
	ratings: [
		{
			id: number
			score: number
			number_of_ratings: number
		}
	]
	url: string
	type_place: number
	type_plece_text: string

	
}

export default place
