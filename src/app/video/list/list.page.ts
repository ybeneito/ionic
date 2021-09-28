import { Component, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service';
import {  Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [VideoService]
})
export class ListPage implements OnInit {

  public movies: Movie[];
  constructor( private service: VideoService ) { }


  ngOnInit(): void {
    this.service.getMovies().subscribe(movies => this.movies = movies);
  }
}
