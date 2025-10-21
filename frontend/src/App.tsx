// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import { initialResumeData } from './types/resume';
import PersonalInfoForm from './components/PersonalInfoForm';
import EducationInfoForm from './components/EducationInfoForm';
import ExperienceInfoForm from './components/ExperienceInfoForm';
import { ResumeData, PersonalInfo, Education, Experience, createEmptyEducation } from './types';




function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [currentStep, setCurrentStep] = useState<number>(1);


  const updateResumeData = (newData: Partial<ResumeData>) => {
    setResumeData(prev => ({
      ...prev,
      ...newData
    }));
  };

  const saveResume = async () => {
    try {
      console.log('Отправляем данные:', resumeData);
      alert('Резюме успешно сохранено!');
    } catch (error) {
      alert('Ошибка при сохранении резюме');
    }
  };

  return (
    <div className="App">
      <header>
      </header>
      <div className="container">
        <div className="form-section">
          <h1>Генератор резюме</h1>
          {currentStep === 1 && (
            <PersonalInfoForm 
              data={resumeData.personalInfo}
              onUpdate={(data: PersonalInfo) => updateResumeData({ personalInfo: data })}
              onNext={() => setCurrentStep(2)}
            />
          )}
          
          {currentStep === 2 && (
            <EducationInfoForm 
              data={resumeData.education}
              onUpdate={(data: Education[]) => updateResumeData({ education: data })}
              onNext={() => setCurrentStep(3)}
              onBack={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 3 && (
            <ExperienceInfoForm 
              data={resumeData.experience}
              onUpdate={(data: Experience) => updateResumeData({ experience: data })}
              onNext={() => setCurrentStep(4)}
              onBack={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 4 && (
            <AboutForm 
              data={resumeData.about}
              onUpdate={(data: string) => updateResumeData({ about: data })}
              onNext={() => setCurrentStep(5)}
              onBack={() => setCurrentStep(3)}
            />
          )}

          {currentStep === 5 && (
            <SkillsForm 
              data={resumeData.skills}
              onUpdate={(data: string[]) => updateResumeData({ skills: data })}
              onBack={() => setCurrentStep(4)}
              onSave={saveResume}
            />
          )}
          {/* <a href="https://t.me/mahlyshev">Связаться с создателем проекта</a> */}
        </div>
      </div>
    </div>
  );
}

const AboutForm: React.FC<{
  data: string;
  onUpdate: (data: string) => void;
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => (
  <div>
    <h2>О себе</h2>
    <p>Расскажите о своих целях, увлечениях и сильных сторонах</p>
    <div className="form-actions">
      <button onClick={onBack}>← Назад</button>
      <button onClick={onNext}>Далее → Навыки</button>
    </div>
  </div>
);

const SkillsForm: React.FC<{
  data: string[];
  onUpdate: (data: string[]) => void;
  onBack: () => void;
  onSave: () => void;
}> = ({ onBack, onSave }) => (
  <div>
    <h2>Навыки</h2>
    <p>Укажите ваши профессиональные навыки и компетенции</p>
    <div className="form-actions">
      <button onClick={onBack}>← Назад</button>
      <button onClick={onSave} className="save-btn">Сохранить резюме</button>
    </div>
  </div>
);



export default App;