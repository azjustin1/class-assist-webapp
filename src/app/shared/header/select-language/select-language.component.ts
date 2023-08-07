import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
  locale: string;
  name: string;
}

@Component({
  selector: 'app-select-language',
  templateUrl: 'select-language.component.html',
})
export class SelectLanguageComponent {
  languages: Language[] = [
    { locale: 'vi-VN', name: 'Tiếng Việt' },
    { locale: 'en-US', name: 'English' },
  ];
  selectedLanguage: Language = this.languages[0];

  constructor(public translate: TranslateService) {
    this.translate.use(this.languages[0].locale);
  }

  onSelectLanguage() {
    this.translate.use(this.selectedLanguage.locale);
  }
}
