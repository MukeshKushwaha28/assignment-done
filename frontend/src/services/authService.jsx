// services/authService.js

import API from './api';

export const registerUser = (formData) => API.post('/auth/register', formData);
export const loginUser = (formData) => API.post('/auth/login', formData);
export const getUsers = () => API.get('/users');
export const getUserById = (_id) => API.get(`/users/${_id}`);
export const updateUser = (id, formData) => API.put(`/users/${id}`, formData);
export const deleteUser = (id) => API.delete(`/users/${id}`);
