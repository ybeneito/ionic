import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from "rxjs/operators/"
import {  Movie } from '../../interfaces/movie';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  public subject: BehaviorSubject<Movie[]>
  private key = "k_qkkrvlc6";
  private movies: Movie[]
  private movie: Movie

  constructor(
    private http: HttpClient
  ) { 
    this.subject = new BehaviorSubject(([] as Movie[]))
  }

  

  public getMovies(): Subscription {
    return this.http.get<Movie[]>(`https://imdb-api.com/en/API/MostPopularMovies/${this.key}`)
    .pipe(map((data: any) => data.items))
    .subscribe((data: Movie[]) => {
      this.subject.next(data)
      this.movies = data
    })
  }

  public getOneMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`https://imdb-api.com/fr/API/Title/${this.key}/${id}`)
    .pipe(map((data: any) => this.movie = data))
  }

  // public deleteMovie(id: string){
  //   this.movies.map((id, movie) => {
  //     if(movie.id === id) {
  //       this.movies.splice(movie, 1)
  //     }
  //     this.subject.next(this.movies)
  //   })
  // }
}
