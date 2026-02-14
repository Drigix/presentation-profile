import {ProfileLink} from './profile-link.model';
import {Education} from './education.model';
import {ProfessionalExperience} from './professional-experience.model';
import {GroupSkill, Skill} from './skill.model';
import {Language} from './language.model';
import {Course} from './course.model';
import {Project} from './project.model';

export class Profile {
  firstName?: string;
  lastName?: string;
  img?: string;
  email?: string;
  phone?: string;
  livingPlace?: string;
  birthDate?: Date;
  description?: string[];
  mainSkills?: Skill[];
  profileLinks?: ProfileLink[];
  education?: Education[];
  professionalExperiences?: ProfessionalExperience[];
  courses?: Course[];
  skillGroupByCategory?: GroupSkill[];
  projects?: Project[];
  languages?: Language[];

  getLinkedinLink(): ProfileLink | undefined {
    return this.profileLinks?.find(link => link.type === 'linkedin');
  }

  getGithubLink(): ProfileLink | undefined {
    return this.profileLinks?.find(link => link.type === 'github');
  }
}
