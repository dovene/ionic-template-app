import { Movie } from './movie.model';

export class MovieApiResponse {
    constructor(
      public results: [Movie],
    ) { }
  }