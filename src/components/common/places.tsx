import { Link } from "react-router-dom";
import Img from "./Img";
import { BiStar } from "react-icons/bi"; // gwiazda pusta
import { FaStar } from "react-icons/fa"; // gwiazda pełna
import place from "../../types/place";
import { DataPlaces } from "../../types/database_type";

const PlacesView: React.FC<place> = (props: place) => {
  const id = props.id.toString();
  const url = "/opinia/" + id;
  const url_comment = "/komentarze/" + id;
  const rating = 5 - Math.floor(props.rating.score);
  const ratigList = Array(rating).fill("test");
  const ratigListFill = Array(Math.floor(props.rating.score)).fill("test");
  const ratingHTMLNotFill: JSX.Element[] = [];
  const ratingHTML: JSX.Element[] = [];

  ratigList.forEach((_, index) => {
    ratingHTMLNotFill.push(<BiStar className="star" key={index} size={32} />);
  });
  ratigListFill.forEach((_, index) =>
    ratingHTML.push(<FaStar className="star starFile" key={index} size={32} />)
  );

  return (
    <div className="placeView w-9/10 mx-auto mt-5 mb-5 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
      <Img img={props.url_image} alt={props.name} />
      <div className="address_data text-center w-full">
        <p className="name_place text-xl font-semibold mb-2">{props.name}</p>
        <div className="stars flex justify-center">
        {ratingHTML}
        {ratingHTMLNotFill}
        </div>
        <div className="info_rating text-lg mb-3">
          <span>Ocena: {props.rating?.score} </span>
          <span> Liczba ocen: {props.rating?.number_of_ratings}</span>
          <p> Typ miejsca: <strong>{props.type_place_text}</strong> </p>
        </div>

        <p className="address mb-3">
          <strong>Adres: </strong>
          {props.address}
        </p>
        <div className="links flex flex-col items-center space-y-2">
          <a href={props.url_map_google} target="blank" className="text-blue-500 hover:text-blue-700">
            Adres do mapy Google
          </a>
          <Link to={url} className="text-blue-500 hover:text-blue-700">Zostaw swoją opinię</Link>
          <Link to={url_comment} className="text-blue-500 hover:text-blue-700">Zobacz komentarze</Link>
        </div>
      </div>
    </div>
  );
};

export default PlacesView;