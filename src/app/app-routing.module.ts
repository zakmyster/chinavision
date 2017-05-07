import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/components/about.component';
import { CauseComponent } from './cause/cause.component';
import { TeamComponent } from './team/team.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cause', component: CauseComponent },
  { path: 'team', component: TeamComponent },
  { path: 'sponsorship', component: SponsorshipComponent },
  { path: 'donate', component: DonateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
