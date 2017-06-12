import { Component, OnInit } from '@angular/core';
import { LanguageDataService } from 'app/shared/services/language-data.service';
import { LanguageService } from 'app/shared/services/language.service';
import { WebContentService } from 'app/shared/services/web-content.service';

@Component({
  selector: 'cv-founder-message',
  templateUrl: './founder-message.component.html',
  styleUrls: ['./founder-message.component.sass']
})
export class FounderMessageComponent implements OnInit {
  public _founderMessage;
  public _founderHeading;

  constructor(private _webContentService: WebContentService,
              private _languageService: LanguageService,
              private _languageDataService: LanguageDataService ) { }

  ngOnInit() {
    this._languageService._currLang$.subscribe(lng => {
      this._founderMessage = this._webContentService.getContentSingle('founder_message', lng);

      // Retrieve Headings used by HTML, controlled by language.
      this._languageDataService.getLanguageData().subscribe((data) => {
        this._founderHeading = data['headings']['founder_message'][lng];
      });
    });
  }
}
