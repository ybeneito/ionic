import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { Item } from 'src/app/interfaces/item';

@Pipe({
  name: 'movieToItem'
})
export class MovieToItemPipe implements PipeTransform {

  transform(value: Movie, ...args: unknown[]): Item {
    

    return {
      author: value.realisator,
      description: value.description,
      title: value.title
    };
  }

}
