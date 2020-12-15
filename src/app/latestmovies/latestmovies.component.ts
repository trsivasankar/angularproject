import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latestmovies',
  templateUrl: './latestmovies.component.html',
  styleUrls: ['./latestmovies.component.css']
})
export class LatestmoviesComponent implements OnInit {

  public moviesList:any = [];

  constructor(public listingservice: MoviesService , public router: Router) { }

  ngOnInit() {

    this.listingservice.getLatest().subscribe(data => {
      
      
      this.moviesList = data })
      
  }

  movieDetails(movie){
    // console.log(id);
    this.router.navigate(['/details', movie]);
  }

}
