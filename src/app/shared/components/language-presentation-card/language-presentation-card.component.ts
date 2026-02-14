import {Component, Input} from '@angular/core';
import {COMMON_IMPORTS, PRIMENG_PANEL_COMPONENTS} from '../../primeng-module-import';
import {Language} from '../../../models/language.model';
import {Tooltip} from 'primeng/tooltip';

@Component({
  selector: 'language-presentation-card-component',
  templateUrl: 'language-presentation-card.component.html',
  styleUrls: ['./language-presentation-card.component.scss'],
  standalone: true,
  imports: [COMMON_IMPORTS, PRIMENG_PANEL_COMPONENTS, Tooltip]
})
export class LanguagePresentationCardComponent {

  @Input() language?: Language;

}
