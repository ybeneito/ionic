import { Component, OnInit, OnDestroy} from '@angular/core';
import { VideoService } from '../service/video.service';
import {  Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [VideoService]
})
export class ListPage implements OnInit, OnDestroy {

  public movies: Movie[];
  constructor( private service: VideoService ) { }


  ngOnInit(): void {
    this.service.getMovies();
    this.service.subject.asObservable().subscribe((data: Movie[]) => this.movies= data)
  }

  ngOnDestroy(): void {
    this.service.getMovies().unsubscribe()
  }
}
