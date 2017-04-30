import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../../shared/services/language.service';
import { LanguageDataService } from '../../../shared/services/language-data.service';

@Component({
  selector: 'cv-workspace-top-nav',
  templateUrl: './workspace-top-nav.component.html',
  styleUrls: ['./workspace-top-nav.component.sass']
})
export class WorkspaceTopNavComponent implements OnInit {
  public _newLanguageLabel: string;
  public _currLanguageLabel: string;
  public _navBarLngLabels: Array<any>;

  constructor(private _languageService: LanguageService,
              private _languageDataService: LanguageDataService) { }

  ngOnInit() {
    this._languageService._currLang$.subscribe(lng => {
      this._currLanguageLabel = lng;
      if (lng === 'cn') {
        this._newLanguageLabel = 'en';
      } else {
        this._newLanguageLabel = 'cn';
      }
      this._languageDataService.getLanguageData().subscribe(data => {
        this._navBarLngLabels = data.nav_bar;
      });
    });
  }

  changeLanguage() {
    this._languageService.setLanguage(this._newLanguageLabel);
  }
}
