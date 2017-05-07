import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { WorkspaceComponent } from './workspace/components/workspace/workspace.component';
import { WorkspaceModule } from 'app/workspace/workspace.module';
import { AboutComponent } from './about/components/about.component';
import { SharedModule } from 'app/shared/shared.module';
import { CauseComponent } from './cause/cause.component';
import { TeamComponent } from './team/team.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AboutComponent,
    CauseComponent,
    TeamComponent,
    SponsorshipComponent,
    DonateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AppRoutingModule,
    WorkspaceModule
  ],
  providers: [],
  bootstrap: [WorkspaceComponent]
})
export class AppModule { }
