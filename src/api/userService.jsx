import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

export const getUsers = () => {
    return axios.get(`${API_URL}/all`);
};

export const getUserById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createUser = (user) => {
    return axios.post(`${API_URL}/add`, user);
};

export const updateUser = (id, userDetails) => {
    return axios.put(`${API_URL}/update/${id}`, userDetails);
};

export const deleteUser = (id) => {
    return axios.delete(`${API_URL}/delete/${id}`);
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data; 
  } catch (error) {
    throw new Error('Invalid email or password!');
  }
};

export const registerUser = async (user) => {
  const response = await axios.post(`${API_URL}/add`, user, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

// export const loginUser = async (email, password) => {
//   const response = await axios.post(`${BASE_URL}/login`, { email, password }, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return response.data;
// };

// export const getUserById = async (id) => {
//   const response = await axios.get(`${BASE_URL}/${id}`);
//   return response.data;
// };
