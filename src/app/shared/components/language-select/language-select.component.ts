import {Component, inject, OnInit} from '@angular/core';
import {COMMON_IMPORTS, FORMS_IMPORTS, PRIMENG_LABEL_COMPONENTS} from '../../primeng-module-import';
import {LANGUAGE_APP_LIST} from '../../../models/language.const';
import {Language} from '../../../models/language.model';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'language-select',
  templateUrl: 'language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
  standalone: true,
  imports: [COMMON_IMPORTS, PRIMENG_LABEL_COMPONENTS, FORMS_IMPORTS]
})
export class LanguageSelectComponent implements OnInit{
  languages: Language[] | undefined;
  selectedLanguage: Language | undefined;

  translateService = inject(TranslateService);

  ngOnInit(): void {
    this.languages = LANGUAGE_APP_LIST;
    this.selectedLanguage = this.languages[1]!;
  }

  onLanguageChange(): void {
    if (this.selectedLanguage?.code === 'PL') {
      this.translateService.use('pl');
    } else if (this.selectedLanguage?.code === 'UK') {
      this.translateService.use('en');
    }
  }
}
