import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {latestMovies} from '../app/models/latestmovies';
import {movieBooking} from '../app/models/moviebooking';


const listingurl= "http://localhost:8900/galleries";
const latesturl= "http://localhost:8900/latestMovies";
const upcomingurl= "http://localhost:8900/upcomingMovies";
const bookingurl= "http://localhost:8900/ticketbooked";

@Injectable({
  providedIn: 'root'
})



export class MoviesService {


  constructor(public http: HttpClient) { }
  

 
  getGalleries():Observable<latestMovies[]> {
  
    return this.http.get<latestMovies[]>(listingurl);
     
  }

  getLatest():Observable<latestMovies[]>{

    return this.http.get<latestMovies[]>(latesturl);

  }
  getUpcoming():Observable<latestMovies[]>{

    return this.http.get<latestMovies[]>(upcomingurl);

  }
  postDetails(data):Observable<movieBooking[]> {

    return this.http.put<movieBooking[]>(bookingurl, data);
  }
}


