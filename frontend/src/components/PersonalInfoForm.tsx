// src/components/PersonalInfoForm.tsx
import React from 'react';
import { PersonalInfo } from '../types/resume';

interface Props {
  data: PersonalInfo;
  onUpdate: (data: PersonalInfo) => void;
  onNext: () => void;
}

const PersonalInfoForm: React.FC<Props> = ({ data, onUpdate, onNext }) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onUpdate({
      ...data,
      [field]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Проверяем обязательные поля перед переходом
    if (data.firstName && data.lastName && data.email) {
      onNext();
    } else {
      alert('Пожалуйста, заполните обязательные поля (Имя, Фамилия, Email)');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="personal-info-form">
      <h2>Личная информация</h2>
      
      <div className="form-group">
        <label htmlFor="firstName">Имя *</label>
        <input
          id="firstName"
          type="text"
          value={data.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          placeholder="Введите ваше имя"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Фамилия *</label>
        <input
          id="lastName"
          type="text"
          value={data.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
          placeholder="Введите вашу фамилию"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="patronymic">Отчество</label>
        <input
          id="patronymic"
          type="text"
          value={data.patronymic}
          onChange={(e) => handleChange('patronymic', e.target.value)}
          placeholder="Введите ваше отчество"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="example@mail.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Телефон</label>
          <input
            id="phoneNumber"
            type="tel"
            value={data.phoneNumber}
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
            placeholder="+7 (999) 999-99-99"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="dateOfBirth">Дата рождения</label>
          <input
            id="dateOfBirth"
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => handleChange('dateOfBirth', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="sex">Пол</label>
          <select
            id="sex"
            value={data.sex}
            onChange={(e) => handleChange('sex', e.target.value)}
          >
            <option value="">Выберите пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="citizenship">Гражданство</label>
        <input
          id="citizenship"
          type="text"
          value={data.citizenship}
          onChange={(e) => handleChange('citizenship', e.target.value)}
          placeholder="Российская Федерация"
        />
      </div>

      <div className="form-group">
        <label htmlFor="socialNetworks">Социальные сети</label>
        <input
          id="socialNetworks"
          type="text"
          value={data.socialNetworks}
          onChange={(e) => handleChange('socialNetworks', e.target.value)}
          placeholder="Ссылки на LinkedIn, VK, GitHub и т.д."
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="next-btn">
          Далее → Образование
        </button>
      </div>

      <div className="form-note">
        <p>* - обязательные для заполнения поля</p>
      </div>
    </form>
  );
};

export default PersonalInfoForm;