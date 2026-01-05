const API_BASE_URL = 'https://ztown-backend.vercel.app/api';

// Contact Form API
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit contact form');
    }

    return data;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
};

// Partner Form API
export const submitPartnerForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/partners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit partner application');
    }

    return data;
  } catch (error) {
    console.error('Partner form submission error:', error);
    throw error;
  }
};

// Get all contacts (Admin)
export const getAllContacts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/contacts`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch contacts');
    }

    return data;
  } catch (error) {
    console.error('Fetch contacts error:', error);
    throw error;
  }
};

// Get all partners (Admin)
export const getAllPartners = async (status = '') => {
  try {
    const url = status 
      ? `${API_BASE_URL}/partners?status=${status}`
      : `${API_BASE_URL}/partners`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch partners');
    }

    return data;
  } catch (error) {
    console.error('Fetch partners error:', error);
    throw error;
  }
};
