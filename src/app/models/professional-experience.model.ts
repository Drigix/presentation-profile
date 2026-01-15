import {Skill} from './skill.model';

export class ProfessionalExperience {
  place?: string;
  placeImg?: string;
  placeUrl?: string;
  placeLocation?: string;
  startDate?: Date;
  endDate?: Date;
  teamRole?: string;
  field?: string;
  description?: string;
  skills?: Skill[];
}
