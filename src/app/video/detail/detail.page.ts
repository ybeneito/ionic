import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../list/movie';
import { VideoService } from '../service/video.service';
import { MovieDetail } from './movieDetail';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  protected movie : Movie;
  constructor(private service: VideoService, private route: ActivatedRoute) { 
  }

 
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('title');
    this.service.getMovieById(id).then((data: MovieDetail) => this.movie = data.results)
  }

}
