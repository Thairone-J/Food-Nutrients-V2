import authStateRedirect from '../utils/auth.js';

export const BASE_URL = 'http://localhost:3000';

const apiServices = {
  loginUser: async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      localStorage.setItem('token', data.token);
      console.log('Login successful:', data);

      // Redirect to homepage but now logged :)
      authStateRedirect();
    } catch (error) {
      console.error('Error during login:', error);
    }
  },

  registerUser: async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();

      localStorage.setItem('token', data.token);

      console.log('Registration successful:', data);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  },

  authUser: async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/validate-token`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.tokenIsValid;
      } else {
        localStorage.removeItem('token');
        return false;
      }
    } catch (error) {
      console.error('Error validating token:', error);
    }
  },
};

const updateGoals = async (token, updatedGoals) => {
  try {
    const response = await fetch('/api/users/goals', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedGoals),
    });

    if (!response.ok) {
      throw new Error('Failed to update goals');
    }

    const data = await response.json();
    console.log('Goals updated successfully:', data);
    return data;
  } catch (error) {
    console.error('Error updating goals:', error);
  }
};

export default apiServices;
