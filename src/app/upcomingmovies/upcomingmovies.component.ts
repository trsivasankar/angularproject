import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcomingmovies',
  templateUrl: './upcomingmovies.component.html',
  styleUrls: ['./upcomingmovies.component.css']
})
export class UpcomingmoviesComponent implements OnInit {

  public moviesList:any = [];

  constructor(public listingservice: MoviesService , public router: Router) { }

  ngOnInit() {
    
    this.listingservice.getUpcoming().subscribe(data => {
      
      
      this.moviesList = data })
  }

  movieDetails(movie){
    // console.log(id);
    this.router.navigate(['/details', movie]);
  }


}
