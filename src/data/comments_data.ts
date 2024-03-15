import Comments from '../types/compoments'

const commentsData: Comments[] = [
	{
		id: 1,
		name_user: 'wojtek',
		comments: 'Wejście od ulicy Żeromskiego',
		id_place: 1,
		date: new Date(2024, 3, 5),
	},
	{
		id: 2,
		name_user: 'ewa',
		comments: 'Uwaga na schody od ulicy Świętojańskiej',
		id_place: 1,
		date: new Date(2024, 3, 11),
	},
	{
		id: 3,
		name_user: 'wojtek',
		comments: 'Wejście od ulicy Żeromskiego',
		id_place: 2,
		date: new Date(2024, 3, 5),
	},
	{
		id: 4,
		name_user: 'ewa',
		comments: 'Uwaga na schody od ulicy Świętojańskiej',
		id_place: 2,
		date: new Date(2024, 3, 12),
	},
]

export default commentsData
