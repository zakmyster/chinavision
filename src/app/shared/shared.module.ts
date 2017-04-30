import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './services/language.service';
import { LanguageDataService } from './services/language-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LanguageService, LanguageDataService]
})
export class SharedModule { }
