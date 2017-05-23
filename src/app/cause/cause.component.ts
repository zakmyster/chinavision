import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../shared/services/language.service';
import { WebContentService } from '../shared/services/web-content.service';
import { LanguageDataService } from '../shared/services/language-data.service';

@Component({
  selector: 'cv-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.sass']
})
export class CauseComponent implements OnInit {
  public _cataractInfoQues;
  public _cataractInfoChina;
  public _cataractQHeading;
  public _cataractCHeading;

  constructor(private _webContentService: WebContentService,
              private _languageService: LanguageService,
              private _languageDataService: LanguageDataService ) { }

  ngOnInit() {
    this._languageService._currLang$.subscribe(language => {
      // Retrieve displayed Component Content.
      this._cataractInfoQues = this._webContentService.getContent('what_is_cataract', language);
      this._cataractInfoChina = this._webContentService.getContent('cataract_in_china', language);

      // Retrieve Headings used by HTML, controlled by language.
      this._languageDataService.getLanguageData().subscribe((data) => {
        this._cataractQHeading = data['headings']['cataract_question'][language];
        this._cataractCHeading = data['headings']['cataract_china'][language];
      });
    });
  }
}
