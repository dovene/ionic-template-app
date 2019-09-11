import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  filmId = null;
  title = null;
  opening_crawl = null;

 
  constructor(private activatedRoute: ActivatedRoute) { }
 
  ngOnInit() {
    this.filmId =  this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.queryParams.subscribe(params => {
      this.title = params["title"];
      this.opening_crawl = params["opening_crawl"];
  });

  }

}
