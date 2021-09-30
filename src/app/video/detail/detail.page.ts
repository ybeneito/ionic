import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../interfaces/movie';
import { VideoService } from '../service/video.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @Input() movies: Movie[];
  public movie: Movie[]
  constructor(private service: VideoService, private route: ActivatedRoute) {
  }



  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getOneMovie(id)
      this.service.getObservable().subscribe((data: Movie[]) => this.movie = data)
  }

}
