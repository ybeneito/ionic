import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-full',
  templateUrl: './full.page.html',
  styleUrls: ['./full.page.scss'],
})
export class FullPage implements OnInit {

  @Input() movie: Movie
  
  constructor() { }

  ngOnInit() { }


}
