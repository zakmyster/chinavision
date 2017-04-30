import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from 'app/about/components/about.component';

const routes: Routes = [
  {
    path: 'about',
    children: [
      {
        path: '',
        component: AboutComponent
      },
      {
        path: ':lng',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
