import { Component, OnInit, OnDestroy } from '@angular/core';
import { WindowService } from '../../shared/services/window.service';
import { Subscription } from 'rxjs/Subscription';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'cv-widget-home',
  templateUrl: './widget-home.component.html',
  styleUrls: ['./widget-home.component.sass']
})
export class WidgetHomeComponent implements OnInit, OnDestroy {
  public sliderHeight: string;
  public activeImageIndex = 0;

  private _timerSubscription: Subscription;
  private _numberCarouselImages = 3;

  constructor(private _windowService: WindowService) { }

  ngOnInit() {
    this._windowService.width$.subscribe((width: any) => {
      this.sliderHeight = (0.45) * width + 'px';
    });

    // Create and Subscribe to Timer, used to create a carousel effect.
    const timer = TimerObservable.create(5000, 5000);
    this._timerSubscription = timer.subscribe(() => {
      if (this.activeImageIndex < (this._numberCarouselImages - 1)) {
        this.activeImageIndex++;
      } else {
        // Restart to first image of carousle.
        this.activeImageIndex = 0;
      }
    });
  }

  ngOnDestroy() {
    // Get rid of timer observable subscription.
    this._timerSubscription.unsubscribe();
  }

  public activateImage(imgIndex: number) {
    if (imgIndex >= 0 && imgIndex < this._numberCarouselImages) {
      this.activeImageIndex = imgIndex;
    }
  }
 }
