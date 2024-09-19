import authStateRedirect from '../utils/auth.js';

export const BASE_URL = 'http://localhost:3000';

const apiRequest = async (endpoint, method, body = null, headers = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

const apiServices = {
  loginUser: async (username, password) => {
    try {
      const data = await apiRequest('/auth/login', 'POST', { username, password });

      localStorage.setItem('token', data.token);
      sessionStorage.setItem('userInfo', JSON.stringify(data.userInfo));

      authStateRedirect();
    } catch (error) {
      console.error('Error during login:', error);
    }
  },

  registerUser: async (username, password) => {
    try {
      const data = await apiRequest('/auth/register', 'POST', { username, password });

      localStorage.setItem('token', data.token);
      sessionStorage.setItem('userInfo', JSON.stringify(data.userInfo));

      authStateRedirect();
    } catch (error) {
      console.error('Error during registration:', error);
    }
  },

  authUser: async (token) => {
    try {
      const data = await apiRequest('/auth/validate-token', 'POST', null, {
        Authorization: `Bearer ${token}`,
      });
      return data.tokenIsValid;
    } catch (error) {
      console.error('Erro ao validar o token:', error);
      localStorage.removeItem('token');
      sessionStorage.removeItem('userInfo');
      return false;
    }
  },

  updateGoals: async (token, goals) => {
    try {
      const data = await apiRequest('/users/goals', 'POST', goals, {
        Authorization: `Bearer ${token}`,
      });

      return data;
    } catch (error) {
      console.error('Error updating goals:', error);
    }
  },
};

export default apiServices;
