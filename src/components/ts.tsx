import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import App from './components/common/App.tsx';
import Menu from './components/common/Menu.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNewPlace from './pages/add_new_pa';
import Disability from './pages/disability';
import 'bootstrap/dist/css/bootstrap.css';
import MainHeader from './components/common/Header.tsx';
import Opinions from './pages/opinions.tsx';
// Zaimportuj oryginalne dane tylko jeśli są potrzebne jako fallback
// import dataList from './data/data.ts';
import commentsData from './data/comments_data.ts';
import CommentsView from './pages/comments.tsx';
import { get_places } from './helps/connect_api.ts';

const Main = () => {
  const [data, setData] = useState([]);
  const [dataComents, setDataComents] = useState(commentsData);
  const [idPlace, setIdPlace] = useState(0);
  const [ratting, setRating] = useState(0);
  const [comment, setComment] = useState('Zostaw swój komentarz');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const dataAPI = await get_places();
      setData(dataAPI);
    };

    fetchData();
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po montażu komponentu

  useEffect(() => {
    setDataComents(commentsData);
  }, [dataComents]);

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
  );
};

