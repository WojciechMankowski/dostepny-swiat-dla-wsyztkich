import { Place, DataPlaces } from "./database_type";
import CommentsType from "./compoments";

export type AppProps = {
  data: Place[];
};

export type OpinionsProps = {
  data: Place[];
  comments: CommentsType[];
  setIdPlace: Function;
  setRating: Function;
  setComment: Function;
  setUserName: Function;
  ratting: number;
};

export type PropsMap = {
  data: Place[];
};

export type RatingProps = {
  data: Place[];
  idPlace: number;
  comment: string;
  setIdPlace: Function;
  setRating: Function;
  setComment: Function;
  userName: string;
  setUserName: Function;
  ratting: number;
};

export type CommentProps = {
  name: string;
  optionchoices: {
    choice_text: string;
    id: string;
  };
  comments: CommentsType[];
};

export type PropsMenu = {
  data: DataPlaces[];
  setSearchResults: (results: DataPlaces[]) => void;
};

export type PropsToggle = {
  theme: string;
  setTheme: Function;
}