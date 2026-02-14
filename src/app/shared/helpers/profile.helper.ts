import {Profile} from '../../models/profile.model';
import {ProfileLink} from '../../models/profile-link.model';
import {Education} from '../../models/education.model';
import {ProfessionalExperience} from '../../models/professional-experience.model';
import {SkillHelper} from './skill.helper';
import {Course} from '../../models/course.model';
import {Project} from '../../models/project.model';
import {Language} from '../../models/language.model';
import {MY_LANGUAGE_LIST} from '../../models/language.const';

export class ProfileHelper {

  public static buildProfile(): Profile {
    const profile = new Profile();
    profile.firstName = 'Michał';
    profile.lastName = 'Ławinski';
    profile.email = 'michrarr@gmail.com';
    profile.phone = '791672387';
    profile.livingPlace = 'Gliwice';
    profile.img = '../../../assets/images/profile_img.png';
    profile.description = this.buildProfileDescription();
    profile.birthDate = new Date(2001, 6, 2);
    profile.profileLinks = this.buildProfileLinks();
    profile.education = this.buildProfileEducation();
    profile.professionalExperiences = this.buildProfileProfessionalExperiences();
    profile.courses = this.buildProfileCourses();
    profile.skillGroupByCategory = SkillHelper.getSkillsGroupByCategories();
    profile.projects = this.buildProfileProjects();
    profile.languages = this.buildProfileLanguages();
    return profile;
  }

  public static buildProfileDescription(): string[] {
    return [
      'profile.description1',
      'profile.description3',
      'profile.description2',
      'profile.description4',
    ]
  }

  public static buildProfileLinks(): ProfileLink[] {
    return [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/michał-ławinski-64663123b/',
        icon: 'pi pi-linkedin',
      },
      {
        type: 'github',
        url: 'https://github.com/Drigix',
        icon: 'pi pi-github',
      }
    ];
  }

  public static buildProfileEducation(): Education[] {
    return [
      {
        place: 'education.sileasianUniversityOfTechnology',
        placeUrl: 'https://www.polsl.pl/rau/',
        placeImg: '../../../assets/images/Logo_PolSl.svg.png',
        faculty: 'education.automaticElectronicsAndComputerScience',
        field: 'education.computerScience',
        specialization: 'education.dataAndSystemsEngineering',
        title: 'education.master',
        titleProject: 'education.masterProject',
        titleProjectUrl: 'https://github.com/Drigix/jetson-basecalling',
        titleProjectDescription: 'education.masterProjectDescription',
        startDate: new Date(2024, 2, 1),
        endDate: new Date(2025, 8, 1),
        avgGrades: 4.83,
        description: 'education.masterDescription',
        skills: SkillHelper.getMasterSkills()
      },
      {
        place: 'education.sileasianUniversityOfTechnology',
        placeUrl: 'https://www.polsl.pl/rau/',
        placeImg: '../../../assets/images/Logo_PolSl.svg.png',
        faculty: 'education.automaticElectronicsAndComputerScience',
        field: 'education.computerScience',
        specialization: 'education.databasesAndSystemsEngineering',
        title: 'education.engineer',
        titleProject: 'education.engineerProject',
        titleProjectUrl: 'https://github.com/Drigix/area-monitoring-app',
        titleProjectDescription: 'education.engineerProjectDescription',
        startDate: new Date(2020, 8, 1),
        endDate: new Date(2024, 1, 1),
        avgGrades: 4.2,
        description: 'education.engineerDescription',
        skills: SkillHelper.getEngineerSkills()
      }
    ];
  }

  public static buildProfileProfessionalExperiences(): ProfessionalExperience[] {
    return [
      {
        place: 'Asseco Poland',
        placeUrl: 'https://pl.asseco.com/',
        placeImg: '../../../assets/images/asseco_poland.png',
        placeLocation: 'Przewozowa 32, 44-100 Gliwice',
        startDate: new Date(2024, 6, 1),
        endDate: undefined,
        teamRole: 'professionalExperience.fullstackDeveloper',
        field: 'professionalExperience.assecoField',
        description: 'professionalExperience.assecoDescription',
        skills: SkillHelper.getAssecoSkills()
      },
      {
        place: 'ENTE Sp. z o.o.',
        placeUrl: 'https://ente.com.pl/',
        placeImg: '../../../assets/images/ente-removebg-preview.png',
        placeLocation: 'Antonio Gaudiego 7, 44-100 Gliwice',
        startDate: new Date(2022, 5, 1),
        endDate: new Date(2024, 5, 30),
        teamRole: 'professionalExperience.fullstackDeveloper',
        field: 'professionalExperience.enteField',
        description: 'professionalExperience.enteDescription',
        skills: SkillHelper.getEnteSkills()
      }
    ];
  }

  public static buildProfileCourses(): Course[] {
    return [
      {
        company: 'ORACLE',
        companyUrl: 'https://mylearn.oracle.com/ou/home',
        companyImg: 'https://www.svgrepo.com/show/448245/oracle.svg',
        courseName: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
        courseImg: '../../../assets/images/ORACLE_AI_FOUNDATIONS_ASSOCIATE.png',
        date: new Date(2025, 11, 1),
        description: 'course.oracleAiFoundationsAssociate'
      },
      {
        company: 'ORACLE',
        companyUrl: 'https://mylearn.oracle.com/ou/home',
        companyImg: 'https://www.svgrepo.com/show/448245/oracle.svg',
        courseName: 'Oracle Cloud Infrastructure 2025 Certified Application Integration Professional',
        courseImg: '../../../assets/images/ORACLE_APPLICATION_INTEGRATION_PROFESSIONAL.png',
        date: new Date(2025, 9, 1),
        description: 'course.oracleApplicationIntegrationProfessional'
      },
      {
        company: 'ORACLE',
        companyUrl: 'https://mylearn.oracle.com/ou/home',
        companyImg: 'https://www.svgrepo.com/show/448245/oracle.svg',
        courseName: 'Oracle Data Platform 2025 Certified Foundations Associate',
        courseImg: '../../../assets/images/ORACLE_DATA_FOUNDATIONS_ASSOCIATE.png',
        date: new Date(2025, 7, 1),
        description: 'course.oracleDataPlatformFoundationsAssociate'
      },
      {
        company: 'ORACLE',
        companyUrl: 'https://mylearn.oracle.com/ou/home',
        companyImg: 'https://www.svgrepo.com/show/448245/oracle.svg',
        courseName: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
        courseImg: '../../../assets/images/ORACLE_INFRA_FOUNDATIONS_ASSOCIATE.png',
        date: new Date(2025, 6, 1),
        description: 'course.oracleCloudInfrastructure'
      },
      {
        company: 'AWS',
        companyUrl: 'https://aws.amazon.com/?nc2=h_home&refid=0286ac9e-9310-49a6-a802-62e1334c411a',
        companyImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
        courseName: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
        courseImg: '../../../assets/images/AWS_CLOUD_FOUNDATIONS.png',
        date: new Date(2025, 4, 1),
        description: 'course.awsCloudFoundations'
      },
      {
        company: 'DataCamp',
        companyUrl: 'https://www.datacamp.com/?utm_cid=805200711&utm_aid=155612384048&utm_campaign=220808_1-ps-brd~brd~branded-pure_2-b2c_3-emea_4-rtw_5-na_6-na_7-le_8-pdsh-go_9-b-e_10-na_11-na&utm_loc=1011536-&utm_mtd=e-c&utm_kw=datacamp&utm_source=google&utm_medium=paid_search&utm_content=ps-other~emea-en~brd~pure~pure&gad_source=1&gad_campaignid=805200711&gbraid=0AAAAADQ9WsG1J1YIsCYPLg-PSmZhJSwrE&gclid=CjwKCAiAvaLLBhBFEiwAYCNTf6wJo7nS4syEAR8kjKing--1hRL4ZbhRZBvLpxLFZBFhqRAuu0NvGRoCuksQAvD_BwE',
        companyImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrhf924c-fjNUvGjrPBAjC4DTh89nrGYUag&s',
        courseName: 'AWS Cloud Technology and Services',
        courseImg: '../../../assets/images/ORACLE_AI_FOUNDATIONS_ASSOCIATE.png',
        date: new Date(2024, 3, 1),
        description: 'course.datacampAwsCloudTechnologyAndService'
      },
      {
        company: 'Altair',
        companyUrl: 'https://altair.com/',
        companyImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ydUuB0e6yVWOKc5bntlMCIhcGT5orLH5AA&s',
        courseName: 'Data Engineering Master Certication',
        courseImg: '../../../assets/images/ALTAIR_DATA_ENGINEERING_MASTER_CERTIFICATION.png',
        date: new Date(2024, 2, 1)
      },
      {
        company: 'Altair',
        companyUrl: 'https://altair.com/',
        companyImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ydUuB0e6yVWOKc5bntlMCIhcGT5orLH5AA&s',
        courseName: 'Data Engineering Professional Certication',
        courseImg: '../../../assets/images/ALTAIR_DATA_ENGINEERING_PROFESSIONAL_CERTIFICATION.png',
        date: new Date(2024, 2, 1)
      },
      {
        company: 'Altair',
        companyUrl: 'https://altair.com/',
        companyImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ydUuB0e6yVWOKc5bntlMCIhcGT5orLH5AA&s',
        courseName: 'Machine Learning Professional Certication',
        courseImg: '../../../assets/images/ALTAIR_ML_PROFESSIONAL_CERTIFICATION.png',
        date: new Date(2024, 2, 1)
      },
      {
        company: 'DataCamp',
        companyUrl: 'https://www.datacamp.com/?utm_cid=805200711&utm_aid=155612384048&utm_campaign=220808_1-ps-brd~brd~branded-pure_2-b2c_3-emea_4-rtw_5-na_6-na_7-le_8-pdsh-go_9-b-e_10-na_11-na&utm_loc=1011536-&utm_mtd=e-c&utm_kw=datacamp&utm_source=google&utm_medium=paid_search&utm_content=ps-other~emea-en~brd~pure~pure&gad_source=1&gad_campaignid=805200711&gbraid=0AAAAADQ9WsG1J1YIsCYPLg-PSmZhJSwrE&gclid=CjwKCAiAvaLLBhBFEiwAYCNTf6wJo7nS4syEAR8kjKing--1hRL4ZbhRZBvLpxLFZBFhqRAuu0NvGRoCuksQAvD_BwE',
        companyImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrhf924c-fjNUvGjrPBAjC4DTh89nrGYUag&s',
        courseName: 'Associate SQL',
        courseImg: '../../../assets/images/DATA_CAMP_SQL_ASSOCIATE.png',
        date: new Date(2024, 3, 1),
        description: 'course.datacampAssociateSql'
      },
    ];
  }

  public static buildProfileProjects(): Project[] {
    return [
      {
        id: 'personal-agent-ai',
        name: 'projects.personalAgentAi',
        description: 'projects.personalAgentAiDescription',
        githubUrl: 'https://github.com/Drigix/personal-agent-ai',
        skills: SkillHelper.getPersonalAgentAiSkills()
      },
      {
        id: 'jetson-basecalling',
        name: 'projects.jetsonBasecalling',
        description: 'projects.jetsonBasecallingDescription',
        githubUrl: 'https://github.com/Drigix/jetson-basecalling',
        skills: SkillHelper.getJetsonBasecallingSkills()
      },
      {
        id: 'k3s-on-jetson-nano-with-gpu',
        name: 'projects.k3sOnJetsonNano',
        description: 'projects.k3sOnJetsonNanoDescription',
        githubUrl: 'https://github.com/Drigix/k3s-on-jetson-nano-with-gpu',
        skills: SkillHelper.getJetsonBasecallingSkills()
      },
      {
        id: 'area-monitoring-app',
        name: 'projects.areaMonitoringApp',
        description: 'projects.areaMonitoringAppDescription',
        githubUrl: 'https://github.com/Drigix/area-monitoring-app',
        skills: SkillHelper.getAreaMonitoringAppSkills()
      },
      {
        id: 'blockchain-analysis',
        name: 'projects.blockchainAnalysis',
        description: 'projects.blockchainAnalysisDescription',
        githubUrl: 'https://github.com/Drigix/BlockchainAnalysis',
        skills: SkillHelper.getBlockchainAnalysis()
      }
    ];
  }

  public static buildProfileLanguages(): Language[] {
    return MY_LANGUAGE_LIST;
  }
}
