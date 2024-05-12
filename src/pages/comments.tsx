import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CommentsType from '../types/compoments';

const CommentsView = (props: { data: CommentsType[] }) => {
  const { id } = useParams<{ id: string }>();
  const [filteredComments, setFilteredComments] = useState<CommentsType[]>([]);

  useEffect(() => {
    const filteredData = props.data.filter(comment => comment.place_id.toString() === id);
    setFilteredComments(filteredData);
  }, [props.data, id]);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // add leading zero if needed
    const day = date.getDate().toString().padStart(2, '0'); // add leading zero if needed
    return `${day}.${month}.${year}`;
  };

  const comments = filteredComments.map(comment => (
    <div key={comment.id} className="comment">
      <p className="username">{comment.user_name}</p>
      <span className="date">{formatDate(new Date(comment.date))}</span>
      <p className="comment_text">{comment.content}</p>
    </div>
  ));

  return <div className="comments">{comments}</div>;
};

export default CommentsView;
