import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LanguageService {
  // Set default Language. Retrieve from Browser Language...
  private _currentLanguage = 'en';

  // Observable string sources
  private _langSource: BehaviorSubject<string> = new BehaviorSubject<string>(this._currentLanguage);

  // Observable string streams
  _currLang$ = this._langSource.asObservable();

  setLanguage(newLang: string) {
    this._currentLanguage = newLang;
    this._langSource.next(this._currentLanguage);
  }
}
