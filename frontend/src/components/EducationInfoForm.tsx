import React from 'react';
import { createEmptyEducation, Education } from '../types';
import { PropsMid } from '../types';

const EducationInfoForm: React.FC<PropsMid<Education[]>> = ({ data, onUpdate, onNext, onBack }) => {
  const handleAddEducation = () => {
    if (data.length > 0) {
      onUpdate([...data, createEmptyEducation(data[data.length - 1].id)]);
    }
  };

  const handleRemoveEducation = (id: number) => {
    if (data.length > 1) {
      onUpdate(data.filter(edu => edu.id !== id));
    }
    console.log(id);
  };

  const handleEducationChange = (id: number, field: keyof Education, value: string) => {
    const updatedEducation = data.map(edu => (edu.id === id ? { ...edu, [field]: value } : edu));
    onUpdate(updatedEducation);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className='personal-info-form'>
      <h2>Образование</h2>

      {data.map((education, index) => (
        <div key={education.id}>
          <div className='form-group'>
            <label htmlFor={`institution-${education.id}`}>Высшее учебное заведение</label>
            <input
              id={`institution-${education.id}`}
              type='text'
              value={education.institution}
              onChange={e => handleEducationChange(education.id, 'institution', e.target.value)}
              placeholder='Место обучения'
              required
              minLength={3}
            />
          </div>

          <div className='form-group'>
            <label htmlFor={`specialty-${education.id}`}>Специальность</label>
            <input
              id={`specialty-${education.id}`}
              type='text'
              value={education.specialty}
              onChange={e => handleEducationChange(education.id, 'specialty', e.target.value)}
              placeholder='Название специальности'
              required
              minLength={5}
            />
          </div>

          <div className='form-group'>
            <label htmlFor={`degree-${education.id}`}>Степень образования</label>
            <input
              id={`degree-${education.id}`}
              type='text'
              value={education.degree}
              onChange={e => handleEducationChange(education.id, 'degree', e.target.value)}
              placeholder='Академическая степень'
              required
              minLength={6}
            />
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor={`yearOfBeginning-${education.id}`}>Год начала обучения</label>
              <input
                id={`yearOfBeginning-${education.id}`}
                type='text'
                value={education.yearOfBeginning}
                onChange={e =>
                  handleEducationChange(education.id, 'yearOfBeginning', e.target.value)
                }
                placeholder='2021'
                required
                minLength={4}
              />
            </div>
            <div className='form-group'>
              <label htmlFor={`yearOfEnding-${education.id}`}>Год окончания обучения</label>
              <input
                id={`yearOfEnding-${education.id}`}
                type='text'
                value={education.yearOfEnding}
                onChange={e => handleEducationChange(education.id, 'yearOfEnding', e.target.value)}
                placeholder='2025'
                required
                minLength={4}
              />
            </div>
          </div>

          {index < data.length - 1 && <hr />}
          {data.length > 0 && (
            <button
              type='button'
              onClick={() => handleRemoveEducation(education.id)}
              className='remove-btn'
            >
              Удалить
            </button>
          )}
        </div>
      ))}

      <div className='form-actions'>
        <button type='button' onClick={handleAddEducation} className='add-btn'>
          + Добавить образование
        </button>
        <button type='button' onClick={onBack} className='back-btn'>
          Назад
        </button>
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

export default EducationInfoForm;
