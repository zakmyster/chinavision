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

  /*
   * For objects single objects. Language is resolved here.
   */
  getContentSingle(type: string, language: string) {
    return this.websiteContent[type][language];
  }

  /*
    * For objects many objects. Language will be resolved in the component
    */
  getContentMany(type: string) {
    return this.websiteContent[type];
  }

  loadWebsiteContent(): Observable<any> {
    return this.http.get(this.aboutUrl)
      .map(res => {
        this.websiteContent = res.json();
      })
      // catch any errors ...
      .catch((err: any) => Observable.throw(err.json().error || 'Server Error'));
  }
}
