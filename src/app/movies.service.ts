import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const uuidv4= require('uuid/v4');

@Injectable()
export class MoviesService {
  private moviesBaseUrl='https://check-movies.firebaseio.com/movies.json';

  constructor(private httpClient: HttpClient) {

  }

  getMovies() {
    return this.httpClient.get(this.moviesBaseUrl);
  }

  addMovie(movie) {
    let headers = new HttpHeaders({"Content-Type": "application-json", "Accept": "application-json"});
    return this.httpClient.post(this.moviesBaseUrl, movie, {headers: headers});
  }

}
