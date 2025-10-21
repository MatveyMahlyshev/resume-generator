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
  institution: string;
  specialty: string;
  degree: string;
  yearOfBeginning: string;
  yearOfEnding: string
  
}

export interface Experience {
  // id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}


export interface ResumeData {
    personalInfo: PersonalInfo;
    education: Education;
    experience: Experience;
    about: string,
    skills: string[];
}

export interface Props<Type> {
  data: Type;
  onUpdate: (data: Type) => void;
  
}

export interface PropsNext<Type> extends Props<Type>{
  onNext: () => void;
}

export interface PropsBack<Type> extends Props<Type>{
  onBack: () => void;  
}

export interface PropsMid<Type> extends PropsNext<Type>, PropsBack<Type>{

} 

export const initialResumeData: ResumeData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    patronymic: "",
    email: "",
    phoneNumber: "",
    socialNetworks: "",
    dateOfBirth: "",
    sex: "",
    citizenship: ""
  },
  education: {
    institution: "",
    specialty: "",
    degree: "",
    yearOfBeginning: "",
    yearOfEnding: "",
  },
  experience: {
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description:"",
  }, 
  about: "",
  skills: []
};