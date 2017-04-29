import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { WorkspaceTopNavComponent } from './components/workspace-top-nav/workspace-top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule
  ],
  declarations: [
    WorkspaceComponent,
    WorkspaceTopNavComponent
  ]
})
export class WorkspaceModule { }
