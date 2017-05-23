import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';

import { WebContentService } from './web-content.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebContentResolver implements Resolve<any> {
    constructor(private wc: WebContentService) { }

    /*
     * Following resolver is called to load website content data before
     * nagivating to routes.
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log('Resolver');
        return this.wc.loadWebsiteContent();
    }
}