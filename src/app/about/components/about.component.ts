import { Component, OnInit } from '@angular/core';
import { AboutService } from 'app/about/services/about.service';

@Component({
  selector: 'cv-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {
  constructor(private _aboutService: AboutService) { }

  ngOnInit() {
    this._aboutService.getAboutData().subscribe(data => {
      console.log(data);
    });
  }
}
