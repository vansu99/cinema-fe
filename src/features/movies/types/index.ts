type StatusMovie = "open" | "pending" | "end";

export type Movie = {
  _id?: string;
  name?: string;
  rate?: number;
  image?: string;
  national?: string;
  startDate?: string;
  description?: string;
  status?: StatusMovie;
};

export type ICategory = {
  _id?: string;
  name: string;
  image?: string;
  films?: Movie[];
  description?: string;
};

export type IMovieSlider = {
  _id: string
  image: string
};

export type IResponseData = {
  films?: Movie[];
  filmStatus?: Movie[];
  categories?: ICategory[];
};
