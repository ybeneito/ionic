import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from "rxjs/operators/"
import {  Movie } from '../../interfaces/movie';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private subject: BehaviorSubject<Movie[]>
  private key = "k_qkkrvlc6";
  private movies: Movie[]
  private movie: Movie

  constructor(
    private http: HttpClient
  ) {
    this.subject = new BehaviorSubject([])
  }



  public getMovies(): Subscription {
    return this.http.get<Movie[]>(`https://imdb-api.com/en/API/MostPopularMovies/${this.key}`)
    .pipe(map((data: any) => data.items))
    .subscribe((data: Movie[]) => {
      this.subject.next(data)
      this.movies = data
    })
  }

  public getObservable() {
    return this.subject.asObservable()
  }

  public getOneMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`https://imdb-api.com/fr/API/Title/${this.key}/${id}`)
    .pipe(map((data: any) => this.movie = data))
  }

   public deleteMovie(id: string){
     this.movies.map((m, index) => {
       if(m.id === id) {
         this.movies.splice(index,1)
       }
       this.subject.next(this.movies)
     })
   }
}
