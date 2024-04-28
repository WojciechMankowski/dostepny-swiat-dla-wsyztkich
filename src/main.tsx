import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import App from "./components/common/App.tsx";
import Menu from "./components/common/Menu.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNewPlace from "./pages/add_new_pa";
import Disability from "./pages/disability";
import "bootstrap/dist/css/bootstrap.css";
import MainHeader from "./components/common/Header.tsx";
import Opinions from "./pages/opinions.tsx";
import CommentsView from "./pages/comments.tsx";
import { get_places, get_comments } from "./helps/connect_api.ts";
import place from "./types/place.ts";
import CommentsType from "./types/compoments.ts";
import "./assets/css/main.css";
import { ThemeProvider } from "@material-tailwind/react";

const Main = () => {
  const [data, setData] = useState<place[]>([]);
  const [dataComents, setDataComents] = useState<CommentsType[]>([]);
  const [idPlace, setIdPlace] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const dataAPI = await get_places();
      setData(dataAPI);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const dataAPI = await get_comments();
      setDataComents(dataAPI);
    };
    fetchData();
  }, []);
  return (
    <ThemeProvider>
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
                  ratting={rating}
                  setRating={setRating}
                  comment={comment}
                  setComment={setComment}
                  userName={userName}
                  setUserName={setUserName}
                />
              }
            />
            <Route
              path="/komentarze/:id"
              element={<CommentsView data={dataComents} />}
            />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
