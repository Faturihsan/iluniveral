import axios from "axios";

export const getAllEvents = async () => {
  try {
    const response = await axios.get("http://localhost:5000/events");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getEventById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/events/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const getAllAlumni = async () => {
  try {
    const response = await axios.get("http://localhost:5000/alumni");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAlumniById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/alumni/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const getAllAchievements = async () => {
  try {
    const response = await axios.get("http://localhost:5000/achievements");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAchievementById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/achievements/${id}`);
    return response.data;
  } catch (err) {
    console.log(err)
  } 
}