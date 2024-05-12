import place from "./place";
import CommentsType from "./compoments";

export type AppProps = {
  data: place[];
};

export type OpinionsProps = {
  data: place[];
  comments: CommentsType[];
  setIdPlace: Function;
  setRating: Function;
  setComment: Function;
  setUserName: Function;
  ratting: number;
};

export type PropsMap = {
  data: place[];
};

export type RatingProps = {
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

export type CommentProps = {
  name: string;
  optionchoices: {
    choice_text: string;
    id: string;
  };
  comments: CommentsType[];
};
