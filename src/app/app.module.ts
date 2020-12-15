import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LatestmoviesComponent } from './latestmovies/latestmovies.component';
import { UpcomingmoviesComponent } from './upcomingmovies/upcomingmovies.component';
import { NearbyeventsComponent } from './nearbyevents/nearbyevents.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesService } from './movies.service';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailsComponent } from './details/details.component';
import { BookingComponent } from './booking/booking.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

  {path: 'latest', component: LatestmoviesComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'upcoming', component: UpcomingmoviesComponent},
  {path: 'nearby', component: NearbyeventsComponent},
  {path: 'booking', component:BookingComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    LatestmoviesComponent,
    UpcomingmoviesComponent,
    NearbyeventsComponent,
    MoviedetailsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    DetailsComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
