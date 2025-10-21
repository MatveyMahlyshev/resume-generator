import React from "react";
import { Education, PropsMid} from "../types/resume";


const EducationInfoForm: React.FC<PropsMid<Education>> = ({data, onUpdate, onNext, onBack}) => {
    const handleChange = (field: keyof Education, value: string) => {
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
            <h2>Образование</h2>
            <div className="form-group">
                <label htmlFor="institution">Высшее учебное заведение</label>
                <input 
                id="institution" 
                type="text" 
                value={data.institution} 
                onChange={(e) => handleChange('institution', e.target.value)} 
                placeholder="Место обучения"
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="specialty">Специальность</label>
                <input 
                id="specialty" 
                type="text" 
                value={data.specialty} 
                onChange={(e) => handleChange('specialty', e.target.value)} 
                placeholder="Название специальности"
                required
                />
                
            </div>
            <div className="form-group">
                <label htmlFor="degree">Степень образования</label>
                <input 
                id="degree" 
                type="text" 
                value={data.degree} 
                onChange={(e) => handleChange('degree', e.target.value)} 
                placeholder="Академическая степень"
                required
                />
            </div>
            <div className="form-row">
                <div className="form-group">
                <label htmlFor="yearOfBeginning">Год начала обучения</label>
                <input 
                id="yearOfBeginning" 
                type="text" 
                value={data.yearOfBeginning} 
                onChange={(e) => handleChange('yearOfBeginning', e.target.value)} 
                placeholder="Год начала"
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="yearOfEnding">Год окончания обучения</label>
                <input 
                id="yearOfEnding" 
                type="text" 
                value={data.yearOfEnding} 
                onChange={(e) => handleChange('yearOfEnding', e.target.value)} 
                placeholder="Год окончания"
                required
                />
            </div>
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

export default EducationInfoForm;