import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {
  private aboutUrl = './about/data/about.json';
  constructor(private http: Http) { }

  getAboutData() {
    return this.http.request(this.aboutUrl)
                    .map(res => res.json());
  }
}
