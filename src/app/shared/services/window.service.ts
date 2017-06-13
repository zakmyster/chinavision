import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Injectable()
export class WindowService {
  public height$: Observable<number>;
  public width$: Observable<number>;

  constructor() {
    const windowSizeSubject$ = new BehaviorSubject(this.getWindowSize());
    this.height$ = (windowSizeSubject$.pluck('height') as Observable<number>).distinctUntilChanged();
    this.width$ = (windowSizeSubject$.pluck('width') as Observable<number>).distinctUntilChanged();

    Observable.fromEvent(window, 'resize')
      .map(this.getWindowSize)
      .subscribe(windowSizeSubject$);
  }

  private getWindowSize() {
    return {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }
}
