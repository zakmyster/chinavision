import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class WebContentService {
  private aboutUrl = './assets/data/website_content.json';
  private websiteContent;

  constructor(private http: Http) {
  }

  getContent(type: string, language: string) {
    return this.websiteContent[type][language];
  }

  loadWebsiteContent() {
    return this.http.get(this.aboutUrl)
      .map(res => {
        this.websiteContent = res.json();
        console.log(this.websiteContent);
      });
  }
}
