import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { LanguageService } from '../../../shared/services/language.service';
import { LanguageDataService } from '../../../shared/services/language-data.service';

@Component({
  selector: 'cv-workspace-top-nav',
  templateUrl: './workspace-top-nav.component.html',
  styleUrls: ['./workspace-top-nav.component.sass']
})
export class WorkspaceTopNavComponent implements OnInit {
  /* Component Elements */
  @ViewChild('menuIcon') menuIconElement: ElementRef;

  /* Display Variables */
  public _showSideBar: boolean;

  /* Content Variables */
  public _newLanguageLabel: string;
  public _currLanguageLabel: string;
  public _navBarLngLabels: Array<any>;

  constructor(private _languageService: LanguageService,
              private _languageDataService: LanguageDataService) { }

  ngOnInit() {
    this._showSideBar = false;

    this._languageService._currLang$.subscribe(lng => {
      this._currLanguageLabel = lng;
      if (lng === 'cn') {
        this._newLanguageLabel = 'en';
      } else {
        this._newLanguageLabel = 'cn';
      }
      this._languageDataService.getLanguageData().subscribe(data => {
        this._navBarLngLabels = data.nav_bar;
      });
    });
  }
  /*
   * Function to change the page language when the Language button
   * is clicked. Takes no parameters.
   */
  public changeLanguage() {
    this._languageService.setLanguage(this._newLanguageLabel);
  }

  /*
   * Function to close the mobile version of the navigation menu,
   * when a nav item is clicked. Takes no parameters.
   */
  public closeNavMenu() {
    this._showSideBar = false; // hides mobile sideBar
  }

  /**
   * setNavXCoord - Find x coordinate of menu-icon then set it for the
   * nav position.
   */
  public setNavXCoord() {
    const menuIconElementRect = this.menuIconElement.nativeElement.getBoundingClientRect();
    return (menuIconElementRect.left - 225) + 'px';
  }
}
