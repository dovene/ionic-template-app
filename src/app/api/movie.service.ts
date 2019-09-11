import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiResponse } from './movie.api.response.model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(public http: HttpClient) { }
 
  apiUrl = 'https://swapi.co/api/films';

  getMovies(): Observable<MovieApiResponse> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => new MovieApiResponse(
        data.results,)       
      ),
    );
  }

}
