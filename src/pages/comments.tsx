import CommentsType from '../types/compoments'
import { useParams } from 'react-router-dom'

const CommentsView = (props: { data: CommentsType[] }) => {
	const id = useParams()
	const commest = props.data
	const data = commest.filter(comment => {
		const _id = comment.place_id.toString()
		return id.id == _id
	})
	const comments = data.map(comment => {
		console.log(comment)
		return (
			<div key={comment.id} className="comment">
				<p className="username">{comment.user_name}</p>
				<span className="date">{comment.date.toDateString()}</span>
				<p className="comment_text">{comment.content}</p>
			</div>
		)
	})

	return <div className="comments">{comments}</div>
}
export default CommentsView
