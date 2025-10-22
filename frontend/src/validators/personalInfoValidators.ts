import { PersonalInfo } from '../types';

export const toUpper = (word: string): string => {
  if (word.length > 1) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  } else if (word.length === 1) {
    return word.toUpperCase();
  }
  return '';
};

export const validateUrl = (url: string): boolean | null => {
  if (!url.trim()) return null;

  const urlRegex =
    /^(https?:\/\/)?([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
  if (!urlRegex.test(url)) {
    alert(
      'Введите ссылку в формате: https://example.com или example.com, или оставьте поле пустым'
    );
    return true;
  }
  return null;
};

export const validateDateOfBirth = (dateString: string): boolean | null => {
  const dateOfBirth = new Date(dateString);
  const dateNow = new Date();

  if (dateNow.getFullYear() - dateOfBirth.getFullYear() < 16) {
    alert('Выберите правильную дату Рождения.');
    return true;
  }
  return null;
};

export const validatePhoneNumber = (phoneNumber: string, data: PersonalInfo): boolean | null => {
  const phoneNumberTemplate = /^(\+?7|8)?(\d{10})$/;
  if (!phoneNumberTemplate.test(phoneNumber)) {
    alert('Введите номер телефона в другом формате.');
    return true;
  }

  if (phoneNumber.length === 11) {
    data.phoneNumber = '+7' + phoneNumber.slice(1);
  } else if (phoneNumber.length === 10) {
    data.phoneNumber = '+7' + phoneNumber;
  }
  return null;
};

export const validateEmail = (email: string): boolean | null => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (!emailRegex.test(email)) {
    alert('Введите электронную почту правильно.');
    return true;
  }

  return null;
};

export const validateName = (name: string, type: string, data: PersonalInfo): boolean | null => {
  name = toUpper(name);
  const nameRegex = /^[А-Яа-яЁё]{2,50}$/;

  if (!nameRegex.test(name)) {
    alert('Фамилия, имя или отчество введены некорректно.');
    return true;
  }

  if (type === 'lastname') {
    data.lastName = name;
  } else if (type === 'firstname') {
    data.firstName = name;
  } else {
    data.patronymic = name;
  }

  return null;
};
