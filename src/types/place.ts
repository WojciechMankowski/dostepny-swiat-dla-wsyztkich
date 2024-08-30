import Rating from "./rating";

interface Place {
  rating: Rating ;
  comments: Comment[] | null;
  readonly id: number;
  readonly address: string;
  readonly name: string;
  readonly type_place: number;
  readonly url_image: string;
  readonly url_map_google: string;
  type_place_text: string;
}
export default Place;
