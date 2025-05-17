import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-language-switcher',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  standalone: true,
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  protected currentLang: string = 'en';
  protected languages: string[] = [ 'en', 'es' ]

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang = language;
  }

}
