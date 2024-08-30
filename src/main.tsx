import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import App from "./components/common/App.tsx";
import Menu from "./components/common/Menu.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNewPlace from "./pages/add_new_pa";
import Disability from "./pages/disability";
import MainHeader from "./components/common/Header.tsx";
import Opinions from "./pages/opinions.tsx";
import Footer from "./components/common/Footer.tsx";
import CommentsView from "./pages/comments.tsx";
import About from "./pages/about.tsx";
import { get_places } from "./helps/connect_api.ts";
import { Place,DataPlaces } from "./types/database_type.ts";
import "./assets/css/main.css";

const Main = () => {
  const [data, setData] = useState<DataPlaces[]>([]);
  const [filterdata, setFilterData] = useState<DataPlaces[]>([]);
  const [idPlace, setIdPlace] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const dataAPI = await get_places();

      setData(dataAPI);
      setFilterData(dataAPI);
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
          <Route
            path="/opinia/:id"
            element={
              <Opinions
                data={data}
                idPlace={idPlace}
                setIdPlace={setIdPlace}
                rating={rating}
                setRating={setRating}
              />
            }
          />
          <Route
            path="/komentarze/:id"
            element={<CommentsView data={[]} />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);