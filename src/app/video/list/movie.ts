export interface Movie {
    id?: string;
    title: string;
    image: string;
    year: string;
    crew: string
}

export interface Items {
    items: Movie[];
}
