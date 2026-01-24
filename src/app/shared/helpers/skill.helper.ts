import {GroupSkill, Skill} from '../../models/skill.model';
import {CONST_SKILLS} from '../../models/skill.const';
import {TechCategory} from '../../enums/tech-category.enum';

export class SkillHelper {

  public static getAllSkills(): Skill[] {
    return CONST_SKILLS;
  }

  public static getEngineerSkills(): Skill[] {
    const skillCodes = [
      'JAVASCRIPT', 'TYPESCRIPT', 'ANGULAR',
      'JAVA', 'SPRING', 'HIBERNATE', 'GRADLE',
      'POSTGRESQL', 'NEO4J',
      'GITHUB',
      'DOCKER',
      'KAFKA', 'LINUX'
    ];
    return CONST_SKILLS.filter(skill => skillCodes.includes(skill.code!));
  }

  public static getMasterSkills(): Skill[] {
    const skillCodes = [
      'JAVA', 'SPRING', 'HIBERNATE', 'GRADLE', 'PYTHON',
      'COSMOSDB', 'NEO4J',
      'GITHUB',
      'DOCKER', 'KUBERNETES', 'LINUX', 'SCRUM'
    ];
    return CONST_SKILLS.filter(skill => skillCodes.includes(skill.code!));
  }

  public static getEnteSkills(): Skill[] {
    const skillCodes = [
      'JAVASCRIPT', 'TYPESCRIPT', 'ANGULAR', 'HTML', 'PRIMENG',
      'JAVA', 'SPRING', 'HIBERNATE', 'NESTJS', 'GRADLE',
      'POSTGRESQL', 'MYSQL', 'MONGODB',
      'GITLAB', 'JENKINS',
      'DOCKER',
      'IONIC', 'CAPACITOR',
      'KAFKA', 'LINUX'
    ];
    return CONST_SKILLS.filter(skill => skillCodes.includes(skill.code!));
  }

  public static getAssecoSkills(): Skill[] {
    const skillCodes = [
      'TYPESCRIPT', 'ANGULAR', 'HTML', 'PRIMENG',
      'JAVA', 'SPRING', 'HIBERNATE', 'MAVEN',
      'ORACLE',
      'GITLAB', 'JENKINS', 'TEAMCITY',
      'DOCKER', 'SCRUM', 'JIRA'
    ];
    return CONST_SKILLS.filter(skill => skillCodes.includes(skill.code!));
  }

  public static getSkillsGroupByCategories(): GroupSkill[] {
    const skillsGroups = [];
    skillsGroups.push({
      techCategory: TechCategory.FRONTEND,
      label: 'skill.frontend',
      skills: SkillHelper.getFrontendSkills()
    });
    skillsGroups.push({
      techCategory: TechCategory.BACKEND,
      label: 'skill.backend',
      skills: SkillHelper.getBackendSkills()
    });
    skillsGroups.push({
      techCategory: TechCategory.DATABASE,
      label: 'skill.database',
      skills: SkillHelper.getDatabaseSkills()
    });
    skillsGroups.push({
      techCategory: TechCategory.BUILD_MANAGEMENT,
      label: 'skill.buildManagement',
      skills: SkillHelper.getBuildManagementSkills()
    });
    skillsGroups.push({
      techCategory: TechCategory.VERSION_CONTROL,
      label: 'skill.versionControl',
      skills: SkillHelper.getVersionControlSkills()
    });
    skillsGroups.push({
      techCategory: TechCategory.CICD,
      label: 'skill.cicd',
      skills: SkillHelper.getCiCdSkills()
    });
    skillsGroups.push({
      techCategory: TechCategory.CONTAINERS,
      label: 'skill.containers',
      skills: SkillHelper.getContainersSkills()
    });
    skillsGroups.push({
      techCategory: TechCategory.CLOUD,
      label: 'skill.cloud',
      skills: SkillHelper.getCloudSkills()
    });
    skillsGroups.push({
      techCategory: TechCategory.MOBILE,
      label: 'skill.mobile',
      skills: SkillHelper.getMobileSkills()
    });
    skillsGroups.push({
      techCategory: TechCategory.AGILE,
      label: 'skill.agile',
      skills: SkillHelper.getAgileSkills()
    });
    return skillsGroups;
  }

  public static getFrontendSkills(): Skill[] {
    return CONST_SKILLS.filter(skill => skill.techCategory === TechCategory.FRONTEND);
  }

  public static getBackendSkills(): Skill[] {
    return CONST_SKILLS.filter(skill => skill.techCategory === TechCategory.BACKEND || skill.techCategory === TechCategory.STREAM);
  }

  public static getDatabaseSkills(): Skill[] {
    return CONST_SKILLS.filter(skill => skill.techCategory === TechCategory.DATABASE);
  }

  public static getBuildManagementSkills(): Skill[] {
    return CONST_SKILLS.filter(skill => skill.techCategory === TechCategory.BUILD_MANAGEMENT);
  }

  public static getCiCdSkills(): Skill[] {
    return CONST_SKILLS.filter(skill => skill.techCategory === TechCategory.CICD);
  }

  public static getVersionControlSkills(): Skill[] {
    return CONST_SKILLS.filter(skill => skill.techCategory === TechCategory.VERSION_CONTROL);
  }

  public static getContainersSkills(): Skill[] {
    return CONST_SKILLS.filter(skill => skill.techCategory === TechCategory.CONTAINERS);
  }

  public static getCloudSkills(): Skill[] {
    return CONST_SKILLS.filter(skill => skill.techCategory === TechCategory.CLOUD);
  }

  public static getMobileSkills(): Skill[] {
    return CONST_SKILLS.filter(skill => skill.techCategory === TechCategory.MOBILE);
  }

  public static getAgileSkills(): Skill[] {
    return CONST_SKILLS.filter(skill => skill.techCategory === TechCategory.AGILE);
  }
}
