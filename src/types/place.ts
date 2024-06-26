import Rating from "./rating";

interface Place {
  readonly id: number;
  readonly address: string;
  readonly name: string;
  readonly type_place: number;
  readonly url_image: string 
  readonly url_map_google: string;
  readonly optionchoices: {
    choice_text: string;
    id: string;
  };
  rating: Rating[];
}
export default Place;
