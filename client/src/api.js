import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api' });

export const signup = (formData) => API.post('/auth/signup', formData);
export const login = (formData) => API.post('/auth/login', formData);

// Contact Us
export const sendContact = (formData) => API.post('/contact', {
    name:formData.name,
    email:formData.email,
    message:formData.message
});

