import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './services/language.service';
import { LanguageDataService } from './services/language-data.service';
import { } from './services/web-content/service';
import { WebContentService } from './services/web-content.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LanguageService, LanguageDataService, WebContentService]
})
export class SharedModule { }
