import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LanguageDataService {
  private aboutUrl = './assets/data/language_data.json';

  constructor(private http: Http) {
  }

  getLanguageData() {
    return this.http.get(this.aboutUrl)
                    .map(res => res.json().language_data);
  }
}
