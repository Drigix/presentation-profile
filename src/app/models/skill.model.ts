export class Skill {
  code?: string;
  label?: string;
  img?: string;
  rating?: number;
  techCategory?: string;
  versions?: string[];
}

export class GroupSkill {
  techCategory?: string;
  label?: string;
  skills?: Skill[];
}
