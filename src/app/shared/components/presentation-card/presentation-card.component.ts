import {Component, Input} from '@angular/core';
import {COMMON_IMPORTS, PRIME_IMAGE_COMPONENTS, PRIMENG_PANEL_COMPONENTS} from '../../primeng-module-import';
import {Education} from '../../../models/education.model';
import {ProfessionalExperience} from '../../../models/professional-experience.model';
import {Tooltip} from 'primeng/tooltip';
import {Course} from '../../../models/course.model';
import {UrlUtils} from '../../utils/url.utils';
import {Project} from '../../../models/project.model';

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
  @Input() project?: Project;
  @Input() viewType?: 'education' | 'professionalExperience' | 'course' | 'project';

  openPage(url: string): void {
    UrlUtils.openPage(url)
  }
}
