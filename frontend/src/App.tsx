import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ResumeData } from './types/resume';

const InitialResumeData: ResumeData = {
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
  education: [],
  experience: [], 
  about: "",
  skills: []

  
}

function App() {
  return (
    <div className='App'>
      <h1>Генератор резюме</h1>
      <p>Создайте красивое резюме</p>
      
      <div className='container'>
        <div className='form-section'>
          <h2>Заполните информацию о себе</h2>
          <p>Здесь скоро будет форма для ввода данных...</p>
        </div>

        <div className='preview-section'>
          <h2>Предпросмотр резюме</h2>
          <p>Здесь будет отображаться ваше резюме...</p>
        </div>
      </div>
    </div>
  )
}

export default App;
