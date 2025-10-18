export interface PersonalInfo {
    firstName: string;
    lastName: string;
    patronymic: string;
    email: string;
    phoneNumber: string;
    socialNetworks: string;
    dateOfBirth: string;
    sex: string;
    citizenship: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  specialty: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}


export interface ResumeData {
    personalInfo: PersonalInfo;
    education: Education[];
    experience: Experience[];
    about: string,
    skills: string[];
}