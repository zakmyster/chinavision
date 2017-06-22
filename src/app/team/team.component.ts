import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../shared/services/language.service';
import { WebContentService } from '../shared/services/web-content.service';
import { LanguageDataService } from '../shared/services/language-data.service';

@Component({
  selector: 'cv-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {
  public _teamData;
  public _language;
  public _teamHeading;

  constructor(private _webContentService: WebContentService,
    private _languageService: LanguageService,
    private _languageDataService: LanguageDataService) { }

  ngOnInit() {
    this._languageService._currLang$.subscribe(lng => {
      this._language = lng;
      this._teamData = this._webContentService.getContentMany('team');

      this._languageDataService.getLanguageData().subscribe(data => {
        this._teamHeading = data['headings']['team'][lng];
      });
    });
  }
}
