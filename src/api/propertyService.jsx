// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/properties';

// export const getAllProperties = () => {
//   return axios.get(`${API_BASE_URL}/all`);
// };

// export const getPropertyById = (id) => {
//   return axios.get(`${API_BASE_URL}/${id}`);
// };

// export const addProperty = (property) => {
//   return axios.post(`${API_BASE_URL}/add`, property);
// };

// export const updateProperty = (id, property) => {
//   return axios.put(`${API_BASE_URL}/update/${id}`, property);
// };

// export const deleteProperty = (id) => {
//   return axios.delete(`${API_BASE_URL}/delete/${id}`);
// };

// export const getPropertiesByType = (type) => {
//   return axios.get(`${API_BASE_URL}/type/${type}`);
// };


import axios from 'axios';

const BASE_URL = 'http://localhost:8080/properties'; // Base URL for your Spring Boot backend

export const getProperties = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  return response.data;
};

// export const addProperty = async (property) => {
//   const formData = new FormData();
//   for (const key in property) {
//     formData.append(key, property[key]);
//   }
//   const response = await axios.post(`${BASE_URL}/add`, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
//   return response.data;
// };

// export const updateProperty = async (id, property) => {
//   const formData = new FormData();
//   for (const key in property) {
//     formData.append(key, property[key]);
//   }
//   const response = await axios.put(`${BASE_URL}/update/${id}`, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
//   return response.data;
// };

export const addProperty = async (property) => {
  const formData = new FormData();
  for (const key in property) {
    formData.append(key, property[key]);
  }
  const response = await axios.post(`${BASE_URL}/add`, formData);
  return response.data;
};

export const updateProperty = async (id, property) => {
  const formData = new FormData();
  for (const key in property) {
    formData.append(key, property[key]);
  }
  const response = await axios.put(`${BASE_URL}/update/${id}`, formData);
  return response.data;
};

export const deleteProperty = async (id) => {
  await axios.delete(`${BASE_URL}/delete/${id}`);
};
