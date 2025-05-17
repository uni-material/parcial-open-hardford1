import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar, MatToolbarModule, MatToolbarRow} from '@angular/material/toolbar';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatAnchor, MatButtonModule} from '@angular/material/button';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatToolbarRow,
    RouterOutlet,
    MatToolbar,
    MatAnchor,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    LanguageSwitcherComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hartford';

  options = [
    { link: '/home', label: 'Home'},
    { link: '/mental-state-exams', label: 'mental-state-exams'},
  ]

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
