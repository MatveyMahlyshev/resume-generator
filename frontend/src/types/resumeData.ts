import { PersonalInfo } from './personalInfo';
import { Education } from './educationInfo';
import { Experience } from './experienceInfo';

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience;
  about: string;
  skills: string[];
}
