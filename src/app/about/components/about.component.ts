import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../shared/services/language.service';
import { WebContentService } from '../../shared/services/web-content.service';
import { LanguageDataService } from '../../shared/services/language-data.service';

@Component({
  selector: 'cv-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  public _aboutContent;
  public _missionContent: Array<string>;
  public _missionHeader;

  public _language: string;
  constructor(private _webContentService: WebContentService,
              private _languageService: LanguageService,
              private _languageDataService: LanguageDataService ) { }

  ngOnInit() {
    this._languageService._currLang$.subscribe(lng => {
      this._language = lng;
      this._aboutContent = this._webContentService.getContent('about_data', this._language);
      this._missionContent = this._webContentService.getContent('mission_data', this._language);
      this._languageDataService.getLanguageData().subscribe((data) => {
        this._missionHeader = data['headings']['mission'][lng];
      });
    });
  }
}
