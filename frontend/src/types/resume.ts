import { ResumeData } from './resumeData';
import { createEmptyEducation } from './educationInfo';
export const initialResumeData: ResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    patronymic: '',
    email: '',
    phoneNumber: '',
    socialNetworks: '',
    dateOfBirth: '',
    sex: '',
    citizenship: '',
  },
  education: [createEmptyEducation(0)],
  experience: {
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  },
  about: '',
  skills: [],
};
