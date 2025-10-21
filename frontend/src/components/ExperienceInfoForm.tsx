import React from "react";
import { Experience, PropsMid} from "../types/resume";


const ExperienceInfoForm: React.FC<PropsMid<Experience>> = ({data, onUpdate, onNext, onBack}) => {
    const handleChange = (field: keyof Experience, value: string) => {
        onUpdate({
            ...data,
            [field]: value
        })
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };
    return (
        <form onSubmit={handleSubmit} className="personal-info-form">
            <h2>Опыт работы</h2>
            <div className="form-group">
                <label htmlFor="company">Компания</label>
                <input 
                id="company" 
                type="text" 
                value={data.company} 
                onChange={(e) => handleChange('company', e.target.value)} 
                placeholder="Название компании"
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="startDate">Начало работы</label>
                <input 
                id="startDate" 
                type="text" 
                value={data.startDate} 
                onChange={(e) => handleChange('startDate', e.target.value)} 
                placeholder="Год начала"
                required
                />
                
            </div>
            <div className="form-group">
                <label htmlFor="endDate">Окончание работы</label>
                <input 
                id="endDate" 
                type="text" 
                value={data.endDate} 
                onChange={(e) => handleChange('endDate', e.target.value)} 
                placeholder="Год окончания"
                required
                />
            </div>
            <div className="form-group-description">
                <label htmlFor="description">Трудовые обязанности</label>
                <input 
                id="description" 
                type="text" 
                value={data.description} 
                onChange={(e) => handleChange('description', e.target.value)} 
                placeholder="Чем занимались?"
                required
                />
            </div>
            <div className="form-actions">
                <button type="button" onClick={onBack} className="back-btn">Назад</button>
                <button type="button" onClick={onNext} className="next-btn">Далее</button>
            </div>
            <div className="form-note">
                <p>* - обязательные для заполнения поля</p>
            </div>
            
        </form>
    )
}

export default ExperienceInfoForm;