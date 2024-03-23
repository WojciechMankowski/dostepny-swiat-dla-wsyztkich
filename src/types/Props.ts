import place from './place'
import CommentsType from './compoments'
export type AppProps = {
	data: place[]
}

export type OpinionsProps = {
	data: place[]
	comments: CommentsType[]
	setIdPlace: Function
	setRating: Function
	setComment: Function
	setUserName: Function
	ratting: number
}
