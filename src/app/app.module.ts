import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { WorkspaceComponent } from './workspace/components/workspace/workspace.component';
import { WorkspaceModule } from 'app/workspace/workspace.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    WorkspaceModule
  ],
  providers: [],
  bootstrap: [WorkspaceComponent]
})
export class AppModule { }
