import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../shared/services/language.service';
import { WebContentService } from '../shared/services/web-content.service';

@Component({
  selector: 'cv-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.sass']
})
export class CauseComponent implements OnInit {
  public _aboutContent;
  public _language: string;

  constructor(private _webContentService: WebContentService,
              private _languageService: LanguageService) { }

  ngOnInit() {
    this._languageService._currLang$.subscribe(lng => {
      this._language = lng;
      this._aboutContent = this._webContentService.getContent('about_data', this._language);
    });
  }
}
