export interface Education {
  id: number,  
  institution: string;
  specialty: string;
  degree: string;
  yearOfBeginning: string;
  yearOfEnding: string
  
}

// export function createEmptyEducation(prevId?: number): Education {
//     if (prevId === undefined) {
//         return ({
//             id: 0,
//             institution: "",
//             specialty: "",
//             degree: "",
//             yearOfBeginning: "",
//             yearOfEnding: "",

//         })
//     }
//     return ({
//         id: prevId + 1,
//         institution: "",
//         specialty: "",
//         degree: "",
//         yearOfBeginning: "",
//         yearOfEnding: "",
//     })

// }

export const createEmptyEducation = (prevId: number): Education => ({
    id: prevId + 1,
    institution: "",
    specialty: "",
    degree: "",
    yearOfBeginning: "",
    yearOfEnding: "",
});