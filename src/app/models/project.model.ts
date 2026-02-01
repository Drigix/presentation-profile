import {Skill} from './skill.model';

export class Project {
  id?: string;
  name?: string;
  description?: string;
  githubUrl?: string;
  skills?: Skill[];
}
