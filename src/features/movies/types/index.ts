type StatusMovie = "open" | "pending" | "end";

export type Movie = {
  name: string;
  description: string;
  image: string;
  status: StatusMovie;
  national?: string
  rate?: number
  startDate?: string
};
