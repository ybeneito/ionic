import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieToItemPipe } from './pipe/movie-to-item.pipe';

@NgModule({
  declarations: [
    MovieToItemPipe
  ],
  imports: [
    CommonModule,
    
  ]
})
export class VideoModule { }
