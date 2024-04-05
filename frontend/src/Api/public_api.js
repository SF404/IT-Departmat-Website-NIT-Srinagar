import axios from 'axios';

const api = axios.create({
  baseURL: '/api/public/',
});

const getCollegeEvents = async () => {
  try {
    const response = await api.get(`college-events/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching college events: ${error}`);
  }
};

const getAnnouncements = async () => {
  try {
    const response = await api.get(`announcements/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching announcements: ${error}`);
  }
};

const getFacultyList = async () => {
  try {
    const response = await api.get(`faculty/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching faculty list: ${error}`);
  }
};

const getFacultyDetail = async (facultyId) => {
  try {
    const response = await api.get(`faculty/${facultyId}/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching faculty detail: ${error}`);
  }
};

const getBtechStudents = async (batch) => {
  try {
    const response = await api.get(`btech-students/?batch=${batch}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching B.Tech students: ${error}`);
  }
};

const getBtechBatches = async () => {
  try {
    const response = await api.get(`btech-batches/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching B.Tech students: ${error}`);
  }
};

const getPhdStudents = async () => {
  try {
    const response = await api.get(`phd-students/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching Ph.D. students: ${error}`);
  }
};

const getAlumniList = async () => {
  try {
    const response = await api.get(`alumni/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching alumni list: ${error}`);
  }
};

const getResearches = async (startDate, endDate) => {
  try {
    let url = 'researches/';
    if (startDate && endDate) {
      url += `?start_date=${startDate}&end_date=${endDate}`;
    }
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching researches: ${error}`);
  }
};

const getProjects = async (startDate, endDate) => {
  try {
    let url = 'projects/';
    if (startDate && endDate) {
      url += `?start_date=${startDate}&end_date=${endDate}`;
    }
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching researches: ${error}`);
  }
};

const getCourseList = async () => {
  try {
    const response = await api.get(`courses/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching course list: ${error}`);
  }
};

const getCourse = async (courseId) => {
  try {
    const response = await api.get(`courses/${courseId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching course list: ${error}`);
  }
};

const getCourseListBySemester = async (semester) => {
  try {
    const response = await api.get(`courses/semester/${semester}/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching course list by semester: ${error}`);
  }
};

const getStudyMaterialListByCourse = async (courseId) => {
  try {
    const response = await api.get(`courses/${courseId}/studymaterials/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching study materials for course: ${error}`);
  }
};

const getGalleryList = async () => {
  try {
    const response = await api.get(`galleries/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching gallery list: ${error}`);
  }
};

const getGalleryImagesList = async (galleryId) => {
  try {
    const response = await api.get(`galleries/${galleryId}/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching images for gallery: ${error}`);
  }
};

const getImages = async (count=12) => {
  try {
    const response = await api.get(`images/?count=${count}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching images : ${error}`);
  }
};

const getSiteFiles = async (category) => {
  try {
    const response = await api.get(`site-files/?category=${category}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching images for gallery: ${error}`);
  }
}


export {
  getCollegeEvents,
  getAnnouncements,
  getFacultyList,
  getFacultyDetail,
  getBtechStudents,
  getBtechBatches,
  getPhdStudents,
  getAlumniList,
  getResearches,
  getProjects,
  getCourseList,
  getCourse,
  getCourseListBySemester,
  getStudyMaterialListByCourse,
  getGalleryList,
  getGalleryImagesList,
  getImages,
  getSiteFiles,
};
