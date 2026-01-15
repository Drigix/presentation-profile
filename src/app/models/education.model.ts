import {Skill} from './skill.model';

export class Education {
  place?: string;
  placeImg?: string;
  placeUrl?: string;
  faculty?: string;
  field?: string;
  specialization?: string;
  startDate?: Date;
  endDate?: Date;
  title?: string;
  titleProject?: string;
  titleProjectUrl?: string;
  titleProjectDescription?: string;
  description?: string;
  avgGrades?: number;
  skills?: Skill[];
}
