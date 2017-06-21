import { Component, OnInit } from '@angular/core';
import { WebContentService } from '../../shared/services/web-content.service';
import { LanguageService } from '../../shared/services/language.service';
import { LanguageDataService } from '../../shared/services/language-data.service';

@Component({
  selector: 'cv-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.sass']
})
export class AboutHomeComponent implements OnInit {
  public _aboutContent;
  public _aboutHeader;

  constructor(private _webContentService: WebContentService,
              private _languageService: LanguageService,
              private _languageDataService: LanguageDataService ) { }

  ngOnInit() { // break this into new functions
    this._languageService._currLang$.subscribe(lng => {
      this._aboutContent = this._webContentService.getContentSingle('about_data', lng);
      this._languageDataService.getLanguageData().subscribe((data) => {
        this._aboutHeader = data['headings']['about_us'][lng];
      });
    });
  }
}
