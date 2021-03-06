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
  public _aboutHeader: string;
  public _missionContent: Array<string>;
  public _missionHeader: string;
  public _goalContent: string;
  public _goalHeading: string;
  public _language: string;

  constructor(private _webContentService: WebContentService,
              private _languageService: LanguageService,
              private _languageDataService: LanguageDataService ) { }

  ngOnInit() { // break this into new functions
    this._languageService._currLang$.subscribe(lng => {
      this._language = lng;
      this._missionContent = this._webContentService.getContentSingle('mission_data', this._language);
      this._goalContent = this._webContentService.getContentSingle('chinavision_goal', this._language);
      this._languageDataService.getLanguageData().subscribe((data) => {
        this._missionHeader = data['headings']['mission'][lng];
        this._goalHeading = data['headings']['goal'][lng];
        this._aboutHeader = data['headings']['about_us'][lng];
      });
    });
  }
}