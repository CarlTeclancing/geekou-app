import axios from "axios";

const API_URL = "http://localhost:3000"; // Use your local IP or deployed URL

// Register User
export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      first_name,
      last_name,
      email,
      phone_number,
      password_hashed,
      country,
      state,
      postalCode,
      date_of_birth,
      idNumber,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.response?.data || error.message);
    throw error;
  }
};

// Login User
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    throw error;
  }
};
