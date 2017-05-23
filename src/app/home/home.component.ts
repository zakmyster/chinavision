import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../shared/services/language.service';
import { WebContentService } from '../shared/services/web-content.service';
import { LanguageDataService } from '../shared/services/language-data.service';

@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public _founderMessage;
  public _founderHeading;

  public _language: string;
  constructor(private _webContentService: WebContentService,
              private _languageService: LanguageService,
              private _languageDataService: LanguageDataService ) { }

  ngOnInit() {
    this._languageService._currLang$.subscribe(lng => {
      this._language = lng;
      console.log('Accessing founder message data.');
      this._founderMessage = this._webContentService.getContentSingle('founder_message', this._language);

      // Retrieve Headings used by HTML, controlled by language.
      this._languageDataService.getLanguageData().subscribe((data) => {
        this._founderHeading = data['headings']['founder_message'][lng];
      });
    });
  }
}
