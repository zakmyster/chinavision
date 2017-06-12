import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class WindowServiceService {
  public $height: Observable<number>;

  constructor() {
    
  }
}
