import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HottoursComponent } from './hottours/hottours.component';
import { CountriesComponent } from './countries/countries.component';
import { SelectionComponent } from './selection/selection.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactComponent } from './contact/contact.component';
import { UsercabComponent } from './usercab/usercab.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { TopBarComponent } from './top-bar/top-bar.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { CityComponent } from './city/city.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { AuthService } from './auth.service';
import { SellsComponent } from './sells/sells.component';
import { RuletkaComponent } from './ruletka/ruletka.component';


@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule,ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'contacts', component: ContactComponent},
      { path: 'tours/:tourId', component: TourDetailsComponent},
      { path: 'usercab', component: UsercabComponent}

    ],)],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    HottoursComponent,
    CountriesComponent,
    SelectionComponent,
    HotelsComponent,
    ContactComponent,
    FooterComponent,
    TopBarComponent,
    TourDetailsComponent,
    CityComponent,
    TourListComponent,
    UsercabComponent,
    SellsComponent,
    RuletkaComponent,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
