// src/components/PersonalInfoForm.tsx
import React, { useState } from 'react';
import { PersonalInfo } from '../types';
import { PropsNext } from '../types';

const PersonalInfoForm: React.FC<PropsNext<PersonalInfo>> = ({ data, onUpdate, onNext }) => {

  const [errors, setErrors] = useState<{[key: string]: string | boolean}>({});

  const validateUrl = (url: string): string | null => {
    if (!url.trim()) return null;
    
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
    if (!urlRegex.test(url)) {
        alert("Введите ссылку в формате: https://example.com или example.com, или оставьте поле пустым")
    }
    return null;
};

  const validateDateOfBirth = (dateString: string): boolean | null => {
    const dateOfBirth = new Date(dateString)
    const dateNow = new Date()

    if (dateNow.getFullYear() - dateOfBirth.getFullYear() < 16) {
      alert("Выберите правильную дату Рождения.")
      return true
    }
    return null
  }

  const validatePhoneNumber = (phoneNumber: string): boolean | null => {

    return null
  } 


  const handleChange = (field: keyof PersonalInfo, value: string) => {

    if (errors[field]){
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[field];
        return newErrors;
      });
    }
    onUpdate({
      ...data,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const socialError = validateUrl(data.socialNetworks);
    if (socialError) {
        setErrors(prev => ({ ...prev, socialNetworks: socialError }));
        return; 
    }
    
    const dateError = validateDateOfBirth(data.dateOfBirth)
    if (dateError) {
      setErrors(prev => ({...prev, dateErrors: dateError}));
      return
    }

    const phoneNumberError = validatePhoneNumber(data.phoneNumber)
    onNext()
  };

  return (
    <form onSubmit={handleSubmit} className='personal-info-form'>
      <h2>Личная информация</h2>
      <div className='form-group'>
        <label htmlFor='lastName'>Фамилия *</label>
        <input
          id='lastName'
          type='text'
          value={data.lastName}
          onChange={e => handleChange('lastName', e.target.value)}
          placeholder='Иванов'
          required
          minLength={2}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='firstName'>Имя *</label>
        <input
          id='firstName'
          type='text'
          value={data.firstName}
          onChange={e => handleChange('firstName', e.target.value)}
          placeholder='Иван'
          required
          minLength={2}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='patronymic'>Отчество</label>
        <input
          id='patronymic'
          type='text'
          value={data.patronymic}
          onChange={e => handleChange('patronymic', e.target.value)}
          placeholder='Иванович'
          minLength={2}
          
        />
      </div>

      <div className='form-row'>
        <div className='form-group'>
          <label htmlFor='email'>Email *</label>
          <input
            id='email'
            type='email'
            value={data.email}
            onChange={e => handleChange('email', e.target.value)}
            placeholder='example@mail.com'
            required
            minLength={5}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='phoneNumber'>Телефон</label>
          <input
            id='phoneNumber'
            type='tel'
            value={data.phoneNumber}
            onChange={e => handleChange('phoneNumber', e.target.value)}
            placeholder='+71234567890'
            required
            minLength={10}
          />
        </div>
      </div>

      <div className='form-row'>
        <div className='form-group'>
          <label htmlFor='dateOfBirth'>Дата рождения</label>
          <input
            id='dateOfBirth'
            type='date'
            value={data.dateOfBirth}
            onChange={e => handleChange('dateOfBirth', e.target.value)}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='sex'>Пол</label>
          <select id='sex' value={data.sex} required onChange={e => handleChange('sex', e.target.value)}>
            <option value=''>Выберите пол</option>
            <option value='male'>Мужской</option>
            <option value='female'>Женский</option>
          </select>
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='citizenship'>Гражданство</label>
        <input
          id='citizenship'
          type='text'
          value={data.citizenship}
          onChange={e => handleChange('citizenship', e.target.value)}
          placeholder='Российская Федерация'
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='socialNetworks'>Ссылка для связи</label>
        <input
          id='socialNetworks'
          type='text'
          value={data.socialNetworks}
          onChange={e => handleChange('socialNetworks', e.target.value)}
          placeholder="https://example.com или example.com"
          className={errors.socialNetworks ? 'error' : ''}
        />
      </div>

      <div className='form-actions'>
        <button type='submit' className='next-btn'>
          Далее
        </button>
      </div>

      <div className='form-note'>
        <p>* - обязательные для заполнения поля</p>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
