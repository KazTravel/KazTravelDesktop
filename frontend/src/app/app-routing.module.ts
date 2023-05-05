import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HottoursComponent } from './hottours/hottours.component';
import { SelectionComponent } from './selection/selection.component';
import { HotelsComponent} from './hotels/hotels.component';
import { CountriesComponent} from './countries/countries.component';
import { ContactComponent} from './contact/contact.component';
import { UsercabComponent} from './usercab/usercab.component';
import {TourDetailsComponent} from "./tour-details/tour-details.component";
import {RuletkaComponent} from "./ruletka/ruletka.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hottours', component: HottoursComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'usercabinet', component: UsercabComponent },
  { path: 'tour-details', component: TourDetailsComponent},
  { path: 'tours/:id', component: TourDetailsComponent},
  { path: 'ruletka', component: RuletkaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

