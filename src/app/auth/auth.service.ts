import { HttpClient, HttpParams } from '@angular/common/http';
import { tokenReference } from '@angular/compiler';
import { Injectable, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Logs } from '../interfaces/log';
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token: string;
  public user: User

  constructor(private router: ActivatedRoute, private http: HttpClient, @Optional() private config: Logs) { }

  public checkToken() {
    let tok = this.router.snapshot.fragment.toString();
    this.token = tok.slice(tok.indexOf('=')+1, tok.indexOf('&'));
    console.log(this.token)
    if(this.token){
      localStorage.setItem('access_token', this.token);
      return this.token;
    }
  }

  public createTokenUserInfo() {
    return this.http.get("https://openidconnect.googleapis.com/v1/userinfo", {
      params: new HttpParams().set(
        "access_token",
        localStorage.getItem('access_token')
      )
    }).toPromise().then((data: User) => this.user = data);
  }

  public constructUrl(): string{
    return `https://accounts.google.com/o/oauth2/auth?client_id=${this.config.client_id}&redirect_uri=${this.config.redirect_uri}&response_type=${this.config.response_type}&scope=${this.config.scope}`;
  }

  public destroyToken():void {
    localStorage.removeItem(localStorage.user_token)
  }
}
