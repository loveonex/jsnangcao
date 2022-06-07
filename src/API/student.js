import api from './axios';

const prefix = 'students'

export const getStudents = () => api.get(prefix);
export const getStudent = (id) => api.get(`${prefix}/${id}`);
export const deleteStudent = (id) => api.delete(`${prefix}/${id}`);
export const createStudent = (data) => api.post(prefix, data);
export const editStudent = (data, id) => api.put(`${prefix}/${id}`, data);