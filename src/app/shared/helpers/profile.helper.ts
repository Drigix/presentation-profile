import {Profile} from '../../models/profile.model';
import {ProfileLink} from '../../models/profile-link.model';
import {Education} from '../../models/education.model';
import {ProfessionalExperience} from '../../models/professional-experience.model';
import {SkillHelper} from './skill.helper';
import {Course} from '../../models/course.model';

export class ProfileHelper {

  public static buildProfile(): Profile {
    const profile = new Profile();
    profile.firstName = 'Michał';
    profile.lastName = 'Ławinski';
    profile.email = 'michrarr@gmail.com';
    profile.phone = '791672387';
    profile.livingPlace = 'Gliwice';
    profile.img = '../../../assets/images/profile_img.png';
    profile.description = 'profile.description';
    profile.birthDate = new Date(2001, 6, 2);
    profile.profileLinks = this.buildProfileLinks();
    profile.education = this.buildProfileEducation();
    profile.professionalExperiences = this.buildProfileProfessionalExperiences();
    profile.courses = this.buildProfileCourses();
    profile.skillGroupByCategory = SkillHelper.getSkillsGroupByCategories();
    return profile;
  }

  public static buildProfileLinks(): ProfileLink[] {
    return [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/michał-ławinski-64663123b/',
      },
      {
        type: 'github',
        url: 'https://github.com/Drigix',
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
      },
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
    ];
  }

  public static buildProfileProfessionalExperiences(): ProfessionalExperience[] {
    return [
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
      },
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
        courseImg: '../../../assets/images/ORACLE_AI_FOUNDATIONS_ASSOCIATE.png',
        date: new Date(2025, 9, 1),
        description: 'course.oracleApplicationIntegrationProfessional'
      }
    ];
  }
}
