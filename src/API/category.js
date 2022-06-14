import api from './axios';

const prefix = 'categories'

export const getCategories = () => api.get(prefix);
export const getCategory = (id) => api.get(`${prefix}/${id}`);
export const deleteCategory = (id) => api.delete(`${prefix}/${id}`);
export const createCategory = (data) => api.post(prefix, data);
export const updateCategory = (data, id) => api.put(`${prefix}/${id}`, data);