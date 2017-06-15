import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../shared/services/language.service';
import { WebContentService } from '../shared/services/web-content.service';
import { LanguageDataService } from '../shared/services/language-data.service';

@Component({
  selector: 'cv-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.sass']
})
export class SponsorshipComponent implements OnInit {
  public _sponsorshipData;
  public _sponsorshipHeading;

  constructor(private _webContentService: WebContentService,
              private _languageService: LanguageService,
              private _languageDataService: LanguageDataService ) { }

  ngOnInit() {
    this._languageService._currLang$.subscribe(lng => {
      this._sponsorshipData = this._webContentService.getContentSingle('sponsors', lng);

      this._languageDataService.getLanguageData().subscribe((data) => {
        this._sponsorshipHeading = data['headings']['sponsorship'][lng];
      });
    });
  }
}
