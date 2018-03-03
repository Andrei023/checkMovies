import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class MoviesService {

  constructor(private httpClient: HttpClient) {

  }

  getMovies() {
    return this.httpClient.get('http://localhost:4000/movies');
  }

  addMovie(movie) {
    let headers = new HttpHeaders({"Content-Type": "application-json", "Accept": "application-json"});
    return this.httpClient.post('http://localhost:4000/movies', movie, {headers: headers});
  }

}
