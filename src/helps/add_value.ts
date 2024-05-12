import axios from "axios";

export const add_new_place = () => {};

export const update_ratings = async (
  id: number,
  score: number,
  how: number
) => {
  const data = {
    score: score,
    number_of_ratings: how,
  };
  const currentURL = window.location.hostname;
  let url;
  if (currentURL == "localhost") {
    url = `${import.meta.env.VITE_LOCALE}rating/${id}`;
  } else {
    url = `${import.meta.env.VITE_PROD}places/`;
  }
  try {
    axios.defaults.headers["X-API-KEY"] = import.meta.env.VITE_API_KEY_API;
    const response = await axios.put(url, data);
    console.log("Update")
    console.log(response)
  } catch (error) {
    console.error("Wystąpił błąd podczas aktualizacji oceny:", error);
    return [];
  }
};
