
import axios from "axios";
import place from "../types/place";
import CommentsType from "../types/compoments";


export const get_places = async (): Promise<place[]> => {
  const currentURL = window.location.hostname;
  let url;
  if (currentURL == "localhost") {
    url = `${import.meta.env.VITE_LOCALE}places/`;
  } else {
    url = `${import.meta.env.VITE_PROD}places/`;
  }
  console.log(url)
  try {
    axios.defaults.headers["X-API-KEY"] = import.meta.env.VITE_API_KEY_API;
    const response = await axios.get<place[]>(url);
    const placesData = response.data;
    return placesData;
  } catch (error) {
    console.error("Wystąpił błąd przy pobieraniu miejsc:", error);
    return [];
  }
};

export const get_comments = async (): Promise<CommentsType[]> => {
  const currentURL = window.location.hostname;
  let url;
  if (currentURL == "localhost") {
    url = `${import.meta.env.VITE_LOCALE}comments`;
  } else {
    url = `${import.meta.env.VITE_PROD}places/`;
  }
  try {
    const response = await axios.get<CommentsType[]>(url);
    const commentsData = response.data;
    const data = [...commentsData];
    return data;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania komentarzy:", error);
    return [];
  }
};
