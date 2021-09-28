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

  private key = "k_9mss3837";

  public getPopularMovies(): Promise<Items>{
    return this.http.get<Items>(`https://imdb-api.com/en/API/Top250Movies/${this.key}`)
    .toPromise();
  }

  public getMovieByName(name: string){
    return this.http.get(`https://imdb-api.com/en/API/SearchMovie/${this.key}/${name}`)
    .toPromise();
  }
}
