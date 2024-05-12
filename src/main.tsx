import ReactDOM from "react-dom/client";
import { useState, useEffect } from 'react';
import App from "./components/common/App.tsx";
import Menu from "./components/common/Menu.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNewPlace from "./pages/add_new_pa";
import Disability from "./pages/disability";
import MainHeader from "./components/common/Header.tsx";
import Opinions from "./pages/opinions.tsx";
import CommentsView from "./pages/comments.tsx";
import About from "./pages/about.tsx";
import { get_places, get_comments } from "./helps/connect_api.ts";
import place from "./types/place.ts";
import CommentsType from "./types/compoments.ts";
import "./assets/css/main.css";


const Main = () => {
  const [data, setData] = useState<place[]>([]);
  const [filterdata, setFilterData] = useState<place[]>([]);
  const [dataComments, setDataComments] = useState<CommentsType[]>([]);
  const [idPlace, setIdPlace] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const dataAPI = await get_places();
      
      setData(dataAPI);
      setFilterData(dataAPI)
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const dataAPI = await get_comments();
      // console.log('pobieram dane')
      // console.log(dataAPI)
      setDataComments(dataAPI);
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      <Router>
        <MainHeader />
        <Menu data={data} setSearchResults={setFilterData} />
        <Routes>
          <Route path="/" element={<App data={filterdata} />} />
          <Route path="/new" element={<AddNewPlace />} />
          <Route path="/o_projekcie" element={<About />} />
          <Route path="/intelektualna" element={<Disability />} />
          <Route path="/opinia/:id" element={
            <Opinions
              data={data}
              idPlace={idPlace}
              setIdPlace={setIdPlace}
              ratting={rating}
              setRating={setRating}
              setComment={setComment}
              setUserName={setUserName}
            />
          } />
          <Route path="/komentarze/:id" element={<CommentsView data={dataComments} />} />
        </Routes>
      </Router>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);