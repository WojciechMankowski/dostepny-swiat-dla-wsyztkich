import Rating from "./rating";

type place = {
  readonly id: number;
  readonly address: string;
  readonly name: string;
  readonly type_place: number;
  readonly url_image: string;
  readonly url_map_google: string;
  readonly optionchoices: {
    choice_text: string;
    id: string;
  };
  rating: Rating[];
  key: number
};

export default place;
