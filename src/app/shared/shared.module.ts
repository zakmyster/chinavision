import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './services/language.service';
import { LanguageDataService } from './services/language-data.service';
import { WebContentResolver } from './services/web-content-resolver.service';
import { WebContentService } from './services/web-content.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LanguageService,
    LanguageDataService,
    WebContentService,
    WebContentResolver
  ]
})
export class SharedModule { }
