export interface Comment {
  id: number;
  content: string;
  date: string;
  user_name: string;
  place_id: number | Place;
}

export interface Place {
  id: number;
  address: string;
  name: string;
  type_place: number;
  url_image: string;
  url_map_google: string;
  type_place_text: string;
}

export interface Rating {
  id: number;
  number_of_ratings: number;
  place_id: number;
  score: number;
}

export type DataPlaces = {
  rating: Rating | null;
  comments: Comment[] | null;
  id: number;
  address: string;
  name: string;
  type_place: number;
  url_image: string;
  url_map_google: string;
  type_place_text: string;
};
