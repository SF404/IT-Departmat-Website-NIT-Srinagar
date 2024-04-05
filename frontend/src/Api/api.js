import axios from 'axios';

const api = axios.create({
    baseURL: '/api/',
});

const getToken = () => {
    return localStorage.getItem('token');
};

const setAuthToken = () => {
    const token = getToken();
    if (token) {
        api.defaults.headers.common['Authorization'] = `Token ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

setAuthToken();

const clearAuthToken = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
};

const login = async (username, password) => {
    try {
        const response = await api.post('auth/login/', { username, password });
        setAuthToken();
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const logout = async () => {
    try {
        const response = await api.post('auth/logout/');
        clearAuthToken();
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const getMyProfile = async () => {
    try {
        const response = await api.get('faculty/profile/');
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const getAllUsers = async () => {
    try {
        const response = await api.get('users/');
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const createUser = async (userData) => {
    try {
        const response = await api.post('users/', userData);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const updateUser = async (userId, userData) => {
    try {
        const response = await api.put(`users/${userId}/`, userData);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const response = await api.delete(`users/${userId}/`);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const bulkCreateUsers = async (usersData) => {
    try {
        const response = await api.post('/users/bulk-create/', usersData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateProfile = async (userData) => {
    try {
        const response = await api.put('faculty/profile/', userData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const addEducation = async (educationData) => {
    try {
        const response = await api.post('faculty/education/', educationData);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const getMyEducations = async () => {
    try {
        const response = await api.get('faculty/education/');
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const addProject = async (projectData) => {
    try {
        const response = await api.post('faculty/project/', projectData);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const getMyProjects = async () => {
    try {
        const response = await api.get('faculty/project/');
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const addResearch = async (researchData) => {
    try {
        const response = await api.post('faculty/research/', researchData);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const getMyResearchs = async () => {
    try {
        const response = await api.get('faculty/research/');
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const deleteEducation = async (educationId) => {
    try {
        const response = await api.delete(`faculty/education/${educationId}/`);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const deleteProject = async (projectId) => {
    try {
        const response = await api.delete(`faculty/project/${projectId}/`);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const deleteResearch = async (researchId) => {
    try {
        const response = await api.delete(`faculty/research/${researchId}/`);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const editEducation = async (educationId, educationData) => {
    try {
        const response = await api.put(`faculty/education/${educationId}/`, educationData);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const editProject = async (projectId, projectData) => {
    try {
        const response = await api.put(`faculty/project/${projectId}/`, projectData);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const editResearch = async (researchId, researchData) => {
    try {
        const response = await api.put(`faculty/research/${researchId}/`, researchData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const addEvent = async (eventData) => {
    try {
        const response = await api.post('college-events/', eventData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding event:', error.message);
        throw error;
    }
};

const addAnnouncement = async (announcementData) => {
    try {
        const response = await api.post('announcements/', announcementData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding event:', error.message);
        throw error;
    }
};

const getEvents = async () => {
    try {
        const response = await api.get('college-events/');
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error.message);
        throw error;
    }
};

const getAnnouncements = async () => {
    try {
        const response = await api.get('announcements/');
        return response.data;
    } catch (error) {
        console.error('Error fetching announcements:', error.message);
        throw error;
    }
};

const updateEvent = async (eventId, eventData) => {
    try {
        const response = await api.put(`college-events/${eventId}/`, eventData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating event:', error.message);
        throw error;
    }
};

const updateAnnouncement = async (announcementId, announcementData) => {
    try {
        const response = await api.put(`announcements/${announcementId}/`, announcementData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating announcement:', error.message);
        throw error;
    }
};

const deleteEvent = async (eventId) => {
    try {
        const response = await api.delete(`college-events/${eventId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting event:', error.message);
        throw error;
    }
};

const deleteAnnouncement = async (announcementId) => {
    try {
        const response = await api.delete(`announcements/${announcementId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting announcement:', error.message);
        throw error;
    }
};

const addCourse = async (courseData) => {
    try {
        const response = await api.post('courses/create/', courseData);
        return response.data;
    } catch (error) {
        console.error('Error adding course:', error.message);
        throw error;
    }
};

const bulkCreateCourses = async (courseData) => {
    console.log(courseData)
    try {
        const response = await api.post('courses/bulk-create/', courseData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getAllCourses = async () => {
    try {
        const response = await api.get('public/courses/');
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error.message);
        throw error;
    }
};

const deleteCourse = async (courseId) => {
    try {
        const response = await api.delete(`courses/${courseId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting course:', error.message);
        throw error;
    }
};

const assignCourseInstructor = async (courseId, facultyId, clearData = false) => {
    try {
        const response = await api.patch(`/assign_instructor/${courseId}/`, {
            faculty_id: facultyId,
            clear_data: clearData.toString()
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
const updateCourse = async (courseId, courseData) => {
    try {
        const response = await api.put(`courses/${courseId}/`, courseData);
        return response.data;
    } catch (error) {
        console.error('Error updating course:', error.message);
        throw error;
    }
};

const getAllStudents = async () => {
    try {
        const response = await api.get('btechstudents/');
        return response.data;
    } catch (error) {
        console.error('Error fetching students:', error.message);
        throw error;
    }
};

const deleteStudent = async (studentId) => {
    try {
        const response = await api.delete(`btechstudents/${studentId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting student:', error.message);
        throw error;
    }
};

const addStudent = async (studentData) => {
    try {
        const response = await api.post('btechstudents/', studentData);
        return response.data;
    } catch (error) {
        console.error('Error adding student:', error.message);
        throw error;
    }
};

const updateStudent = async (studentId, studentData) => {
    try {
        const response = await api.put(`btechstudents/${studentId}/`, studentData);
        return response.data;
    } catch (error) {
        console.error('Error updating student:', error.message);
        throw error;
    }
};

const bulkCreateStudent = async (studentData) => {
    console.log(studentData)
    try {
        const response = await api.post('btechstudents/bulk-create/', studentData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getFacultyCourses = async () => {
    try {
        const response = await api.get('faculty/courses/');
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

const getStudyMaterials = async (courseId) => {
    try {
        const response = await api.get(`courses/${courseId}/studymaterials/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching study materials:', error.message);
        throw error;
    }
};

const addStudyMaterial = async (courseId, formData) => {
    try {
        const response = await api.post(`courses/${courseId}/studymaterials/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding study material:', error.message);
        throw error;
    }
};

const getCourseInfo = async (courseId) => {
    try {
        const response = await api.get(`courses/${courseId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching course information:', error.message);
        throw error;
    }
};

const deleteStudyMaterial = async (courseId, materialId) => {
    try {
        const response = await api.delete(`courses/${courseId}/studymaterials/${materialId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting study material:', error.message);
        throw error;
    }
};

const addGallery = async (galleryData) => {
    try {
        const response = await api.post('galleries/', galleryData);
        return response.data;
    } catch (error) {
        console.error('Error adding gallery:', error.message);
        throw error;
    }
};

const getAllGalleries = async () => {
    try {
        const response = await api.get('galleries/');
        return response.data;
    } catch (error) {
        console.error('Error fetching galleries:', error.message);
        throw error;
    }
};

const deleteGallery = async (galleryId) => {
    try {
        const response = await api.delete(`galleries/${galleryId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting gallery:', error.message);
        throw error;
    }
};

const updateGallery = async (galleryId, galleryData) => {
    try {
        const response = await api.put(`galleries/${galleryId}/`, galleryData);
        return response.data;
    } catch (error) {
        console.error('Error updating gallery:', error.message);
        throw error;
    }
};

const getGallery = async (galleryId) => {
    try {
        const response = await api.get(`galleries/${galleryId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting gallery:', error.message);
        throw error;
    }
};

const addImageToGallery = async (galleryId, imageData) => {
    try {
        const response = await api.post(`galleries/${galleryId}/images/`, imageData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding image to gallery:', error.message);
        throw error;
    }
};

const deleteImageFromGallery = async (imageId) => {
    try {
        const response = await api.delete(`images/${imageId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting image from gallery:', error.message);
        throw error;
    }
};

const addPhdScholar = async (phdScholarData) => {
    try {
        const response = await api.post('phd-scholars/', phdScholarData);
        return response.data;
    } catch (error) {
        console.error('Error adding PhD scholar:', error.message);
        throw error;
    }
};

const getAllPhdScholars = async () => {
    try {
        const response = await api.get('phd-scholars/');
        return response.data;
    } catch (error) {
        console.error('Error fetching PhD scholars:', error.message);
        throw error;
    }
};

const deletePhdScholar = async (phdScholarId) => {
    try {
        const response = await api.delete(`phd-scholars/${phdScholarId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting PhD scholar:', error.message);
        throw error;
    }
};

const updatePhdScholar = async (phdScholarId, phdScholarData) => {
    try {
        const response = await api.put(`phd-scholars/${phdScholarId}/`, phdScholarData);
        return response.data;
    } catch (error) {
        console.error('Error updating PhD scholar:', error.message);
        throw error;
    }
};


const getAllAlumni = async () => {
    try {
        const response = await api.get('alumni/');
        return response.data;
    } catch (error) {
        console.error('Error fetching alumni:', error.message);
        throw error;
    }
};

 const addAlumni = async (alumniData) => {
    try {
        const response = await api.post('alumni/', alumniData);
        return response.data;
    } catch (error) {
        console.error('Error adding alumni:', error.message);
        throw error;
    }
};

const updateAlumni = async (alumniId, alumniData) => {
    try {
        const response = await api.put(`alumni/${alumniId}/`, alumniData);
        return response.data;
    } catch (error) {
        console.error('Error updating alumni:', error.message);
        throw error;
    }
};

const deleteAlumni = async (alumniId) => {
    try {
        const response = await api.delete(`alumni/${alumniId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting alumni:', error.message);
        throw error;
    }
};

const bulkCreateAlumni = async (alumniData) => {
    console.log(alumniData)
    try {
        const response = await api.post('alumni/bulk-create/', alumniData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getSiteFilesByCategory = async (category) => {
    try {
        const response = await api.get('site-files/', {
            params: { category }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching site files by category:', error.message);
        throw error;
    }
};

const addSiteFile = async (siteFileData) => {
    try {
        const response = await api.post('site-files/', siteFileData);
        return response.data;
    } catch (error) {
        console.error('Error adding site file:', error.message);
        throw error;
    }
};

const updateSiteFile = async (siteFileId, siteFileData) => {
    try {
        const response = await api.put(`site-files/${siteFileId}/`, siteFileData);
        return response.data;
    } catch (error) {
        console.error('Error updating site file:', error.message);
        throw error;
    }
};

const deleteSiteFile = async (siteFileId) => {
    try {
        const response = await api.delete(`site-files/${siteFileId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting site file:', error.message);
        throw error;
    }
};




export {
    login,
    logout,

    getMyProfile,
    updateProfile,

    addEducation,
    addProject,
    addResearch,

    getMyEducations,
    getMyProjects,
    getMyResearchs,

    deleteEducation,
    deleteProject,
    deleteResearch,

    editEducation,
    editProject,
    editResearch,

    getAllUsers,
    createUser,
    updateUser,
    deleteUser,

    bulkCreateUsers,

    addEvent,
    addAnnouncement,

    getEvents,
    getAnnouncements,

    updateEvent,
    updateAnnouncement,

    deleteEvent,
    deleteAnnouncement,

    addCourse,
    getAllCourses,
    deleteCourse,
    updateCourse,
    assignCourseInstructor,

    bulkCreateCourses,

    getAllStudents,
    deleteStudent,
    addStudent,
    updateStudent,

    bulkCreateStudent,

    getFacultyCourses,
    getCourseInfo,

    getStudyMaterials,
    addStudyMaterial,
    deleteStudyMaterial,

    addGallery,
    getAllGalleries,
    deleteGallery,
    updateGallery,
    getGallery,
    addImageToGallery,
    deleteImageFromGallery,

    addPhdScholar,
    getAllPhdScholars,
    deletePhdScholar,
    updatePhdScholar,

    getAllAlumni,
    addAlumni,
    updateAlumni,
    deleteAlumni,
    bulkCreateAlumni,

    getSiteFilesByCategory,
    addSiteFile,
    updateSiteFile,
    deleteSiteFile,

};
