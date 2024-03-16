type typdata = {
	id: number
	name: string
	adress: string
	url_img: string
	url_map_google: string
	number_of_ratings: number
	rating: number
}

const dataList: typdata[] = [
	{
		id: 1,
		name: 'Cafe Strych',
		adress: 'plac Kaszubski 7B, 81-350 Gdynia',
		url_img: 'https://tiny.pl/dm2c6',
		url_map_google: 'https://tiny.pl/dm2cv',
		number_of_ratings: 5,
		rating: 3
	},
    {
		id: 2,
		name: 'Cafe Strych 2',
		adress: 'plac Kaszubski 7B, 81-350 Gdynia',
		url_img: 'https://tiny.pl/dm2c6',
		url_map_google: 'https://tiny.pl/dm2cv',
		number_of_ratings: 5,
		rating: 4
	},
]
export default dataList