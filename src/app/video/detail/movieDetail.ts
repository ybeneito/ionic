import { Movie } from "../list/movie";

export interface MovieDetail {
    "searchType": string;
    "expression": string;
    "results": Movie
}