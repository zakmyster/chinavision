import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { About } from '../models/about.model';

@Injectable()
export class AboutService {
  private aboutUrl = './assets/data/about.json';
  constructor(private http: Http) {
  }

  getAboutData() {
    return this.http.get(this.aboutUrl)
                    .map(res => res.json().data);
  }
}
