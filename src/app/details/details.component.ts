import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public movie:any = [];

  constructor(public listingservice: MoviesService ,private route: ActivatedRoute,
    private router: Router) {

    this.route.params.subscribe( params => this.movie = params );

   }

  ngOnInit() {
    

  }

  

}
