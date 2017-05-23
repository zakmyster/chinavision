import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../shared/services/language.service';
import { WebContentService } from '../shared/services/web-content.service';

@Component({
  selector: 'cv-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.sass']
})
export class DonateComponent implements OnInit {
  public _donateData;

  constructor(private _webContentService: WebContentService,
              private _languageService: LanguageService) { }

  ngOnInit() {
    this._languageService._currLang$.subscribe(lng => {
      this._donateData = this._webContentService.getContentSingle('donate', lng);
    });
  }
}
