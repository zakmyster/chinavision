import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../shared/services/language.service';
import { WebContentService } from '../shared/services/web-content.service';

@Component({
  selector: 'cv-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.sass']
})
export class SponsorshipComponent implements OnInit {
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
