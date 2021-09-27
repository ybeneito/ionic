import { Component, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service';
import { Items, Movie } from './movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [VideoService]
})
export class ListPage implements OnInit {

  protected movies: Movie[];
  constructor( private service: VideoService ) { }


  ngOnInit(): void {
    this.service.getPopularMovie().then((data: Items) => this.movies = data.items);
  }

}
