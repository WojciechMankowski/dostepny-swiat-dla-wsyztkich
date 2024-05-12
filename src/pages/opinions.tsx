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
  setIdPlace: Function;
  setRating: Function;

  ratting: number;
};

const Opinions = (props: AppProps) => {
  const [localRating, setLocalRating] = useState<number>(props.ratting);
  const [userName, setUserName] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [ratingError, setRatingError] = useState<string>("");
  const [commentError, setCommentError] = useState<string>("");

  const { id } = useParams<{ id: string }>();
  const data = props.data.find((place) => place.id.toString() === id);
  const ratings = data?.rating[0];

  useEffect(() => {
    if (data) {
      props.setIdPlace(data.id);
    }
  }, [data, props]);

  useEffect(() => {
    props.setRating(localRating);
  }, [localRating, props.setRating]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let isRatting = true;
    let isComments = true;
    if (localRating === 0) {
      setRatingError(
        "Aby ocenić miejsce, musisz wybrać odpowiednią ilość gwiazdek."
      );
      isRatting = false;
    } else {
      setRatingError("");
    }

    if (!userName.trim() || !comments.trim()) {
      setCommentError(
        "Aby dodać komentarz, musisz wpisać swoje imię oraz komentarz."
      );
      isComments = false;
    } else {
      setCommentError("");
    }
    if (isRatting) {
      const oldPlaceRating = data?.rating[0];
      console.log(oldPlaceRating);
      const totalRatings = (oldPlaceRating?.number_of_ratings || 0) + 1;
      const newScore =
        ((oldPlaceRating?.score || 0) *
          (oldPlaceRating?.number_of_ratings || 0) +
          localRating) /
        totalRatings;
      update_ratings(oldPlaceRating?.place_id || 0, newScore, totalRatings);
    }
    if (isComments) {
    }
  };

  return (
    <div className="opinion max-w-4xl mx-auto py-8 px-4 text-2xl">
      <Place
        id={data?.id || 0}
        name={data?.name || ""}
        address={data?.address || ""}
        url_img={data?.url_image || ""}
        url_map_google={data?.url_map_google || ""}
        number_of_ratings={ratings?.number_of_ratings || 0}
        rating={ratings?.score || 0}
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
        {ratingError && <span>{ratingError}</span>}
        <label htmlFor="userName">Twoje imię</label>
        <input
          name="userName"
          className="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 outline outline-0 
      transition-all focus:border-gray-900 focus:outline-0 disabled:border-0 
      disabled:bg-blue-gray-50 mt-5"
          value={userName}
          onChange={(event) => setUserName(event.currentTarget.value)}
        />

        <label htmlFor="comment" className="mt-5">
          Zostaw komentarz jak chcesz
        </label>
        <textarea
          name="comments"
          className="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 outline outline-0 
      transition-all focus:border-gray-900 focus:outline-0 disabled:border-0 
      disabled:bg-blue-gray-50"
          value={comments}
          onChange={(event) => setComments(event.currentTarget.value)}
        />
        {commentError && <span>{commentError}</span>}
        <input
          type="submit"
          value="Dodaj opinię"
          className="select-none rounded-lg bg-main py-3 px-6 mt-5 text-center 
      font-bold  transition-all text-white"
        />
      </form>
    </div>
  );
};

export default Opinions;
