import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import App from './components/common/App.tsx'
import Menu from './components/common/Menu.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddNewPlace from './pages/add_new_pa'
import Disability from './pages/disability'
import 'bootstrap/dist/css/bootstrap.css'
import MainHeader from './components/common/Header.tsx'
import Opinions from './pages/opinions.tsx'
import dataList from './data/data.ts'
import commentsData from './data/comments_data.ts'
import CommentsView from './pages/comments.tsx'

const Main = () => {
	const [data, setData] = useState(dataList)
	const [dataComents, setDataComents] = useState(commentsData)
	const [idPlace, setIdPlace] = useState(0)
	const [ratting, setRating] = useState(0)
	const [comment, setComment] = useState('Zostaw swój komentarz')
	const [userName, setUserName] = useState("")
	setData(dataList)
	setDataComents(commentsData)
	return (
		<div className="main">
			<Router>
				<MainHeader />
				<Menu />
				<Routes>
					<Route path="/" element={<App data={data} />} />
					<Route path="/new" element={<AddNewPlace />} />
					<Route path="/ruchowa" element={<Disability />} />
					<Route path="/intelektualna" element={<Disability />} />
					<Route
						path="/opinia/:id"
						element={
							<Opinions
								data={data}
								idPlace={idPlace}
								setIdPlace={setIdPlace}
								ratting={ratting}
								setRating={setRating}
								comment={comment}
								setComment={setComment}
								userName={userName}
								setUserName={setUserName}
							/>
						}
					/>
					<Route path="/komentarze/:id" element={<CommentsView data={dataComents} />} />
				</Routes>
			</Router>
		</div>
	)
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />)
