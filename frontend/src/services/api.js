const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const contactAPI = {
  create: async (contactData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit contact form');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch contacts');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch contact');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete contact');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },
};
