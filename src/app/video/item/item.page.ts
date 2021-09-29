import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import {VideoService} from "../service/video.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  @Input() movie: Movie

  constructor(private service: VideoService) { }

  ngOnInit() { }

  deleteMovie(id: string){
    return this.service.deleteMovie(id)
  }


}
