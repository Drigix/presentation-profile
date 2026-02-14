import {Component, Input} from '@angular/core';
import {
  COMMON_IMPORTS,
  PRIMENG_OVERLAY_COMPONENTS,
  PRIMENG_PANEL_COMPONENTS,
  PRIMENG_RATING_COMPONENTS
} from '../../primeng-module-import';
import {Skill} from '../../../models/skill.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'skill-presentation-card',
  templateUrl: 'skill-presentation-card.component.html',
  styleUrls: ['./skill-presentation-card.component.scss'],
  standalone: true,
  imports: [COMMON_IMPORTS, PRIMENG_PANEL_COMPONENTS, PRIMENG_OVERLAY_COMPONENTS, PRIMENG_RATING_COMPONENTS, FormsModule]
})
export class SkillPresentationCardComponent {

  @Input() title?: string;
  @Input() skills?: Skill[] = [];
}
