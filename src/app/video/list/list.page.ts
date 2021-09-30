import { Component, OnInit, OnDestroy} from '@angular/core';
import { VideoService } from '../service/video.service';
import { Movie } from '../../interfaces/movie';
import {AuthServiceService} from "../../auth/auth.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [VideoService]
})
export class ListPage implements OnInit, OnDestroy {

  public movies: Movie[];
  public infoUser

  constructor( private service: VideoService, private logservice: AuthServiceService) { }

  ngOnInit(): void {
    this.service.getMovies();
    this.service.getObservable().subscribe((data: Movie[]) => this.movies = data)
    this.logservice.checkToken()
    this.logservice.createTokenUserInfo().then((data)=> this.infoUser = data)
  }

  public logout(){
    this.logservice.destroyToken()
  }


  ngOnDestroy(): void {
    this.service.getMovies().unsubscribe()
  }

}
