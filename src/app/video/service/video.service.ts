import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from "rxjs/operators/"
import {  Movie } from '../../interfaces/movie';
import { Item } from '../../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
 
  constructor(
    private http: HttpClient
  ) { }

  private key = "k_qkkrvlc6";

  // public getPopularMovies(): Promise<Items>{
  //   return this.http.get<Items>(`https://imdb-api.com/en/API/MostPopularMovies/${this.key}`)
  //   .toPromise();
  // }

  // public getMovieById(id: string){
  //   return this.http.get(`https://imdb-api.com/fr/API/Title/${this.key}/${id}`)
  //   .toPromise();
  // }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`https://imdb-api.com/en/API/MostPopularMovies/${this.key}`)
    .pipe(map((value: any) => {
      return value.items
    }))
  }

  public getOneMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`https://imdb-api.com/fr/API/Title/${this.key}/${id}`)
  }
}
