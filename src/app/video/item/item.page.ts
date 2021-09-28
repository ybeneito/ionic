import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../list/movie';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  @Input() movie: Movie
  
  constructor() { }

  ngOnInit() { }


}
