import {Skill} from './skill.model';
import {TechCategory} from '../enums/tech-category.enum';

export const CONST_SKILLS: Skill[] = [
  {
    code: 'JAVASCRIPT',
    label: 'skill.javascript',
    img: 'https://images.seeklogo.com/logo-png/33/1/javascript-logo-png_seeklogo-330541.png',
    techCategory: TechCategory.FRONTEND,
    rating: 4
  },
  {
    code: 'TYPESCRIPT',
    label: 'skill.typescript',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
    techCategory: TechCategory.FRONTEND,
    rating: 5
  },
  {
    code: 'ANGULAR',
    label: 'skill.angular',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1280px-Angular_gradient_logo.png?20231107180344',
    techCategory: TechCategory.FRONTEND,
    rating: 5
  },
  {
    code: 'HTML',
    label: 'skill.html',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dperVCVozb1YpnSN0u_hBFYCX6ayxjzVVQ&s',
    techCategory: TechCategory.FRONTEND,
    rating: 4.5
  },
  {
    code: 'PRIMENG',
    label: 'skill.primeng',
    img: 'https://www.primefaces.org/wp-content/uploads/2018/05/primeng-logo.png',
    techCategory: TechCategory.FRONTEND,
    rating: 5
  },
  {
    code: 'IONIC',
    label: 'skill.ionic',
    img: 'https://cdn.iconscout.com/icon/free/png-256/free-ionic-logo-icon-svg-download-png-2945013.png',
    techCategory: TechCategory.MOBILE,
    rating: 4
  },
  {
    code: 'CAPACITOR',
    label: 'skill.capacitor',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8T2aQWYiXsT4ZkiFi6xrMwGpQp_PXyppISQ&s',
    techCategory: TechCategory.MOBILE,
    rating: 4
  },
  {
    code: 'JAVA',
    label: 'skill.java',
    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png',
    techCategory: TechCategory.BACKEND,
    rating: 5
  },
  {
    code: 'SPRING',
    label: 'skill.spring',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i4zPog-0j0JR_yZglxPhTPZXxN2iMTQ3Dw&s',
    techCategory: TechCategory.BACKEND,
    rating: 4.5
  },
  {
    code: 'HIBERNATE',
    label: 'skill.hibernate',
    img: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Hibernate-Light.svg',
    techCategory: TechCategory.BACKEND,
    rating: 4.5
  },
  {
    code: 'NESTJS',
    label: 'skill.netjs',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg',
    techCategory: TechCategory.BACKEND,
    rating: 4
  },
  {
    code: 'PYTHON',
    label: 'skill.python',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png',
    techCategory: TechCategory.BACKEND,
    rating: 3.5
  },
  {
    code: 'KAFKA',
    label: 'skill.kafka',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOKEVxLEPXLVAhlOcrfBnIOTzoCU23BwUMA&s',
    techCategory: TechCategory.STREAM,
    rating: 3.5
  },
  {
    code: 'GRADLE',
    label: 'skill.gradle',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGB4c68gVX4b9LSPVqrFlw5bR4cj7thFJ-nQ&s',
    techCategory: TechCategory.BUILD_MANAGEMENT,
    rating: 4.5
  },
  {
    code: 'MAVEN',
    label: 'skill.maven',
    img: 'https://www.svgrepo.com/show/373829/maven.svg',
    techCategory: TechCategory.BUILD_MANAGEMENT,
    rating: 3
  },
  {
    code: 'POSTGRESQL',
    label: 'skill.postgresql',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png',
    techCategory: TechCategory.DATABASE,
    rating: 4.5
  },
  {
    code: 'MYSQL',
    label: 'skill.mysql',
    img: 'https://www.svgrepo.com/show/303251/mysql-logo.svg',
    techCategory: TechCategory.DATABASE,
    rating: 3.5
  },
  {
    code: 'ORACLE',
    label: 'skill.oracle',
    img: 'https://www.svgrepo.com/show/448245/oracle.svg',
    techCategory: TechCategory.DATABASE,
    rating: 4
  },
  {
    code: 'MONGODB',
    label: 'skill.mongodb',
    img: 'https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png',
    techCategory: TechCategory.DATABASE,
    rating: 4
  },
  {
    code: 'NEO4J',
    label: 'skill.neo4j',
    img: 'https://www.svgrepo.com/show/354103/neo4j.svg',
    techCategory: TechCategory.DATABASE,
    rating: 3.5
  },
  {
    code: 'COSMOSDB',
    label: 'skill.azurecosmosdb',
    img: 'https://www.clipartmax.com/png/small/150-1509635_azure-cosmos-db-logo.png',
    techCategory: TechCategory.DATABASE,
    rating: 2
  },
  {
    code: 'GITHUB',
    label: 'skill.github',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    techCategory: TechCategory.VERSION_CONTROL,
    rating: 5
  },
  {
    code: 'GITLAB',
    label: 'skill.gitlab',
    img: 'https://cdn.worldvectorlogo.com/logos/gitlab.svg',
    techCategory: TechCategory.VERSION_CONTROL,
    rating: 5
  },
  {
    code: 'JENKINS',
    label: 'skill.jenkins',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1483px-Jenkins_logo.svg.png',
    techCategory: TechCategory.CICD,
    rating: 3.5
  },
  {
    code: 'TEAMCITY',
    label: 'skill.teamcity',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TeamCity_Icon.svg/2048px-TeamCity_Icon.svg.png',
    techCategory: TechCategory.CICD,
    rating: 3.5
  },
  {
    code: 'LINUX',
    label: 'skill.linux',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/500px-Tux.svg.png',
    techCategory: TechCategory.CONTAINERS,
    rating: 3
  },
  {
    code: 'DOCKER',
    label: 'skill.docker',
    img: 'https://www.svgrepo.com/show/331370/docker.svg',
    techCategory: TechCategory.CONTAINERS,
    rating: 4.5
  },
  {
    code: 'KUBERNETES',
    label: 'skill.kubernetes',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/3840px-Kubernetes_logo_without_workmark.svg.png',
    techCategory: TechCategory.CONTAINERS,
    rating: 3.5
  },
  {
    code: 'AWS',
    label: 'skill.aws',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
    techCategory: TechCategory.CLOUD,
    rating: 3
  },
  {
    code: 'OCI',
    label: 'skill.oci',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Oracle-cloud-infrastructure.png',
    techCategory: TechCategory.CLOUD,
    rating: 3
  },
  {
    code: 'SCRUM',
    label: 'skill.scrum',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEDCuAu1R7MmGxmDQ-0YdcDNp_ZOD-IQMMQ&s',
    techCategory: TechCategory.AGILE,
    rating: 4
  },
  {
    code: 'JIRA',
    label: 'skill.jira',
    img: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
    techCategory: TechCategory.AGILE,
    rating: 4
  }
]
