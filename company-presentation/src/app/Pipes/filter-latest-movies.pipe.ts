import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLatestMovies'
})
export class FilterLatestMoviesPipe implements PipeTransform {

  transform(moviesList: any): void {
    if (moviesList)
    {
      return moviesList.filter(movie => (new Date().getFullYear() - new Date(movie.date_of_release).getFullYear()) < 1);
    }
    return;
  }

}
