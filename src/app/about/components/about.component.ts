import { Component, OnInit } from '@angular/core';
import { AboutService } from 'app/about/services/about.service';

import 'rxjs/add/operator/switchMap';
import { LanguageService } from '../../shared/services/language.service';
import { About } from '../models/about.model';

@Component({
  selector: 'cv-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {
  public _contents: Array<any>;
  public _language: string;
  constructor(private _aboutService: AboutService,
              private _languageService: LanguageService) { }

  ngOnInit() {
    this._languageService._currLang$.subscribe(lng => {
      this._language = lng;
      this._aboutService.getAboutData().subscribe(data => {
        this._contents = data.filter(item => item.language === this._language);
      });
    });
  }
}
