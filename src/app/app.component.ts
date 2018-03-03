import {Component} from '@angular/core';
import {MoviesService} from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  movies;
  index = 0;
  src = 'https://massolutions.biz/wp-content/uploads/2014/12/e5a06942fa42823c88be5f3a834e063d-fantastic-art-bat-family.jpg';

  constructor(private moviesService: MoviesService) {
    moviesService.getMovies().subscribe(
      (res) => {
        console.log('onSuccess');
        console.log(res);
        this.movies = res;
      },
      (err) => {
        console.log('onError');
      },
      () => {
        console.log('onComplete');
      }
    );

  }

  addMovie(event) {
    this.index++;
    let movie = {
      id: this.index,
      name: this.title
    };
    this.movies.push(movie);

    this.moviesService.addMovie(movie).subscribe(
      (res) => {
        console.log('onSuccess');
        console.log(res);
      },
      (err) => {
        console.log('onError');
      },
      () => {
        console.log('onComplete');
      }
    );
    console.log(event);
  }

}
