import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private service: VideoService, private route: ActivatedRoute) { 
  }

  protected movies : any;
  
  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('title');
    this.service.getMovieByName(name).then((data: MovieDetail) => this.movies = data.results);
  }

}
