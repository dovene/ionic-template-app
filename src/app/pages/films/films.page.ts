import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { MovieService } from 'src/app/api/movie.service';
import { Movie } from 'src/app/api/movie.model';
@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  films : [Movie];

  constructor(private navController: NavController, private router: Router,  
    private httpClient: HttpClient, public movieService: MovieService) { 
  movieService.getMovies().subscribe(data => {
    console.log('my data: ', data);
    this.films = data.results;
  });  

  }

  ngOnInit() {
  }

  openDetails(film: Movie) {
    // Both of these would work!
    // But the standard Router is recommended.
    //this.navController.navigateForward(`/tabs/films/42`);
    console.log('selected film: ', film);
   // this.router.navigateByUrl(`/tabs/films/`+film);
  //  this.navController.push('FilmDetailsPage', {film: film});

  let navigationExtras: NavigationExtras = {
    queryParams: film
  };
 this.router.navigate(["/tabs/films/noParams"], navigationExtras);

  }
 
  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planets`)
  }
}
