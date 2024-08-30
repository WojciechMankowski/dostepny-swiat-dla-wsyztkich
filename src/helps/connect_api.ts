import { fetchPlaces, fetchRatingWithId, fetchCommendWithId } from "./database";
import { Place, DataPlaces } from "../types/database_type";
import getTypePlace from "./get_type_place";
export const get_places = async (): Promise<DataPlaces[]> => {
  const places = await fetchPlaces();
  const placesData: DataPlaces[] = [];

  for (const place of places) {
    const rating = await fetchRatingWithId(place.id);
    const comments = await fetchCommendWithId(place.id);
      
    const newData: DataPlaces = {
      ...place,
      rating: rating,
      comments: comments,
      type_place_text: getTypePlace(place.type_place)
    };

    placesData.push(newData);
  }

  return placesData;
};


