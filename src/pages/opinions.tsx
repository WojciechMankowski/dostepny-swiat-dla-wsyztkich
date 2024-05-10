import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import Place from "../components/features/place";
import "@smastrom/react-rating/style.css";
import place from "../types/place";
import { update_ratings } from "../helps/add_value";

type AppProps = {
  data: place[];
  idPlace: number;
  comment: string;
  setIdPlace: Function;
  setRating: Function;
  setComment: Function;
  userName: string;
  setUserName: Function;
  ratting: number;
};

const Opinions = (props: AppProps) => {
  const [localRating, setLocalRating] = useState<number>(props.ratting);

  const { id } = useParams<{ id: string }>();
  const data = props.data.find((place) => place.id.toString() === id);
  console.log(data);
  
  const ratings = data?.rating[0];
  console.log(ratings);
  useEffect(() => {
    if (data) {
      props.setIdPlace(data.id);
    }
  }, [data, props]);

  useEffect(() => {
    props.setRating(localRating);
  }, [localRating, props.setRating]);

  if (!data) return <div>Nie znaleziono miejsca.</div>;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (ratings) {
      // const { id, score, number_of_ratings } = ratings
      // const how = number_of_ratings + 1
      // const new_score = (score * number_of_ratings + localRating) / how
      // update_ratings(id, new_score, how)
    }
  };

  return (
    <div className="opinion max-w-4xl mx-auto py-8 px-4 text-2xl">
      <Place
        id={data.id}
        name={data.name}
        address={data.address}
        url_img={data.url_image}
        url_map_google={data.url_map_google}
        number_of_ratings={ratings?.number_of_ratings}
        rating={ratings?.score}
      />

      <h3 className="mb-4 text-4xl font-extrabold leading-none ">
        Zostaw swoją opinię
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full content-center justify-center"
      >
        <Rating
          style={{ maxWidth: 250 }}
          value={localRating}
          onChange={setLocalRating}
          className=""
        />
        <label htmlFor="userName">Twoje imię</label>
        <input
          name="userName"
          className="
      peer h-full w-full border-b bg-transparent pt-4 pb-1.5 outline outline-0 
      transition-all focus:border-gray-900 focus:outline-0 disabled:border-0 
      disabled:bg-blue-gray-50 mt-5
    "
          value={props.userName}
          onChange={(event) => props.setUserName(event.currentTarget.value)}
        />
        {/* Dodaj klasę mt-5 poniżej */}
        <label htmlFor="comment" className="mt-5">
          Zostaw komentarz jak chcesz
        </label>
        <textarea
          name="comments"
          className="
      peer h-full w-full border-b bg-transparent pt-4 pb-1.5 outline outline-0 
      transition-all focus:border-gray-900 focus:outline-0 disabled:border-0 
      disabled:bg-blue-gray-50
    "
          value={props.comment}
          onChange={(event) => props.setComment(event.currentTarget.value)}
        />
        <input
          type="submit"
          value="Dodaj opinię"
          className="
      select-none rounded-lg bg-main py-3 px-6 mt-5 text-center 
      font-bold  transition-all text-white
    "
        />
      </form>
    </div>
  );
};

export default Opinions;
