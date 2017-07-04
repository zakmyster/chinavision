import { Component, OnInit } from '@angular/core';
import { LanguageDataService } from '../shared/services/language-data.service';
import { LanguageService } from 'app/shared/services/language.service';
import { WebContentService } from 'app/shared/services/web-content.service';

@Component({
  selector: 'cv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  public _contactHeader: string;

  constructor(private _languageService: LanguageService,
              private _languageDataService: LanguageDataService ) { }

  ngOnInit() { // break this into new functions
    this._languageService._currLang$.subscribe(lng => {
      this._languageDataService.getLanguageData().subscribe((data) => {
        this._contactHeader = data['headings']['contact'][lng];
      });
    });
  }
}
