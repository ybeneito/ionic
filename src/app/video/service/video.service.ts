import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items, Movie } from '../list/movie';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
    private http: HttpClient
  ) { }

  private key = "k_qkkrvlc6";

  public getPopularMovies(): Promise<Items>{
    return this.http.get<Items>(`https://imdb-api.com/en/API/MostPopularMovies/${this.key}`)
    .toPromise();
  }

  public getMovieById(id: string){
    return this.http.get(`https://imdb-api.com/fr/API/Title/${this.key}/${id}`)
    .toPromise();
  }
}
