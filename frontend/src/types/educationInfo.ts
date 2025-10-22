export interface Education {
  id: number;
  institution: string;
  specialty: string;
  degree: string;
  yearOfBeginning: string;
  yearOfEnding: string;
}

export const createEmptyEducation = (prevId: number): Education => ({
  id: prevId + 1,
  institution: '',
  specialty: '',
  degree: '',
  yearOfBeginning: '',
  yearOfEnding: '',
});
