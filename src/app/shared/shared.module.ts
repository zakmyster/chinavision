import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './services/language.service';
import { LanguageDataService } from './services/language-data.service';
import { WebContentResolver } from './services/web-content-resolver.service';
import { WebContentService } from './services/web-content.service';
import { WindowService } from './services/window.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LanguageService,
    LanguageDataService,
    WebContentService,
    WebContentResolver,
    WindowService
  ]
})
export class SharedModule { }
