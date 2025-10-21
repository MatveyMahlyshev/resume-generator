import React from "react";
import { createEmptyEducation, Education } from "../types";
import { PropsMid } from "../types";

// Меняем пропсы - теперь работаем с массивом
const EducationInfoForm: React.FC<PropsMid<Education[]>> = ({ data, onUpdate, onNext, onBack }) => {
    
    // Добавить новое образование
    const handleAddEducation = () => {
        if (data.length > 0) {
            onUpdate([...data, createEmptyEducation(data[data.length - 1].id)]);
        }
    };

    const getLastEducationId = (): number => {
        if (data.length === 0) 
            return 0;
        return data[data.length - 1].id;
    };

// Использование
const lastId = getLastEducationId();
    // Удалить образование по ID
    const handleRemoveEducation = (id: number) => {
        if (data.length > 1) {
            onUpdate(data.filter(edu => edu.id !== id));
        }
        console.log(id)
    };

    // Обновить конкретное поле образования
    const handleEducationChange = (id: number, field: keyof Education, value: string) => {
        const updatedEducation = data.map(edu => 
            edu.id === id ? { ...edu, [field]: value } : edu
        );
        onUpdate(updatedEducation);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="personal-info-form">
            <h2>Образование</h2>
            
            {data.map((education, index) => (
                <div key={education.id} className="education-block">
                    <div className="form-group">
                        <label htmlFor={`institution-${education.id}`}>Высшее учебное заведение</label>
                        <input 
                            id={`institution-${education.id}`}
                            type="text" 
                            value={education.institution} 
                            onChange={(e) => handleEducationChange(education.id, 'institution', e.target.value)} 
                            placeholder="Место обучения"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor={`specialty-${education.id}`}>Специальность</label>
                        <input 
                            id={`specialty-${education.id}`}
                            type="text" 
                            value={education.specialty} 
                            onChange={(e) => handleEducationChange(education.id, 'specialty', e.target.value)} 
                            placeholder="Название специальности"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor={`degree-${education.id}`}>Степень образования</label>
                        <input 
                            id={`degree-${education.id}`}
                            type="text" 
                            value={education.degree} 
                            onChange={(e) => handleEducationChange(education.id, 'degree', e.target.value)} 
                            placeholder="Академическая степень"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor={`yearOfBeginning-${education.id}`}>Год начала обучения</label>
                            <input 
                                id={`yearOfBeginning-${education.id}`}
                                type="text" 
                                value={education.yearOfBeginning} 
                                onChange={(e) => handleEducationChange(education.id, 'yearOfBeginning', e.target.value)} 
                                placeholder="Год начала"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`yearOfEnding-${education.id}`}>Год окончания обучения</label>
                            <input 
                                id={`yearOfEnding-${education.id}`}
                                type="text" 
                                value={education.yearOfEnding} 
                                onChange={(e) => handleEducationChange(education.id, 'yearOfEnding', e.target.value)} 
                                placeholder="Год окончания"
                                required
                            />
                        </div>
                    </div>

                    {index < data.length - 1 && <hr />}
                {data.length > 0 && (
                <button 
                    type="button" 
                    onClick={() => handleRemoveEducation(education.id)}
                    className="remove-btn"
                >
                    Удалить
                </button>
                )}
                 <div className="form-actions">    
            </div>

                </div>
                
            ))}

            <div className="form-actions">

                <button type="button" onClick={handleAddEducation} className="add-btn">
                    + Добавить образование
                </button>
                    <button type="button" onClick={onBack} className="back-btn">Назад</button>
                    <button type="submit" className="next-btn">Далее</button>
                
            </div>

            <div className="form-note">
                <p>* - обязательные для заполнения поля</p>
            </div>
        </form>
    );
};

export default EducationInfoForm;