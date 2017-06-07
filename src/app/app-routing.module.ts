import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/components/about.component';
import { CauseComponent } from './cause/cause.component';
import { TeamComponent } from './team/team.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { WebContentResolver } from './shared/services/web-content-resolver.service';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: [WebContentResolver] },
  { path: 'about', component: AboutComponent, resolve: [WebContentResolver] },
  { path: 'cause', component: CauseComponent, resolve: [WebContentResolver] },
  { path: 'team', component: TeamComponent, resolve: [WebContentResolver] },
  { path: 'sponsorship', component: SponsorshipComponent, resolve: [WebContentResolver] },
  { path: 'donate', component: DonateComponent, resolve: [WebContentResolver] },
  { path: 'contact', component: ContactComponent, resolve: [WebContentResolver] },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
