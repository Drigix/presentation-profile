import {Component, Input} from '@angular/core';
import {COMMON_IMPORTS, PRIME_IMAGE_COMPONENTS, PRIMENG_PANEL_COMPONENTS} from '../../primeng-module-import';
import {Education} from '../../../models/education.model';
import {ProfessionalExperience} from '../../../models/professional-experience.model';
import {Tooltip} from 'primeng/tooltip';
import {Course} from '../../../models/course.model';

@Component({
  selector: 'presentation-card',
  templateUrl: 'presentation-card.component.html',
  styleUrls: ['./presentation-card.component.scss'],
  standalone: true,
  imports: [COMMON_IMPORTS, PRIMENG_PANEL_COMPONENTS, Tooltip, PRIME_IMAGE_COMPONENTS]
})
export class PresentationCardComponent {

  @Input() education?: Education;
  @Input() professionalExperience?: ProfessionalExperience;
  @Input() course?: Course;
  @Input() viewType?: 'education' | 'professionalExperience' | 'course';

  openPage(url: string): void {
    window.open(url, '_blank');
  }
}
