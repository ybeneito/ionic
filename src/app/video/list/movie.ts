export interface Movie {
    id?: number;
    title: string;
    image: string;
    year: string;
    crew: string
}

export interface Items {
    items: Movie[];
}
