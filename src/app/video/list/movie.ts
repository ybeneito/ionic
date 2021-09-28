export interface Movie {
    id?: string;
    title: string;
    image: string;
    releaseDate: string;
    plot: string
}

export interface Items {
    items: Movie[];
}
