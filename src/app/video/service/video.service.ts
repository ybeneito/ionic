import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
    private http: HttpClient
  ) { }

  private key = "k_pnbwnzzv";

  public getPopularMovie(){
    return this.http.get("https://imdb-api.com/en/API/Top250Movies/"+this.key)
    .toPromise();
  }
}
