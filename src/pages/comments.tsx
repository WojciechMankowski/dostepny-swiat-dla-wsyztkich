import CommentsType from '../types/compoments'
import { useParams } from 'react-router-dom'

const CommentsView = (props: { data: CommentsType[] }) => {
	const id = useParams()
	const commest = props.data
	const data = commest.filter(comment => {
		const _id = comment.id_place.toString()
		return id.id == _id
	})
	const comments = data.map(comment => {
		return (
			<div key={comment.id} className="comment">
				<p className="username">{comment.name_user}</p>
				<span className="date">{comment.date.toLocaleDateString()}</span>
				<p className="comment_text">{comment.comments}</p>
			</div>
		)
	})

	return <div className='comments'>{comments}</div>
}
export default CommentsView
