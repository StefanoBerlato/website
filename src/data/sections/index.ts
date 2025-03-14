import type { Sections } from '@/types/data';
import type { ReadonlyDeep } from 'type-fest';
import mainData from './main-section.data';
import skillsData from './skills-section.data';
import experienceData from './experience-section.data';
import educationData from './education-section.data';
import researchProjectData from './research-project-section.data';
import teachingData from './teaching-section.data';
import publicationsData from './publications-section.data';
import thesesData from './theses-section.data';
import portfolioData from './portfolio-section.data';
import serviceData from './service-section.data';

export const sections = {
  main: mainData,
  skills: skillsData,
  experience: experienceData,
  education: educationData,
  researchProject: researchProjectData,
  teaching: teachingData,
  publications: publicationsData,
  theses: thesesData,
  portfolio: portfolioData,
  service: serviceData,
} as const satisfies ReadonlyDeep<Sections>;

export default sections;
