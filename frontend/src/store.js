// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from './features/personalInfoSlice';
import educationInfoReducer from './features/educationInfoSlice ';
import experienceReducer from './features/experienceSlice';
import skillSetReducer from './features/skillSetSlice';
import projectsReducer from './features/projectsSlice';
import certificationsReducer from './features/certificationsSlice';
import additionalSectionReducer from './features/additionalSectionSlice';

// Add other reducers as needed

const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    educationInfo: educationInfoReducer,
    experience: experienceReducer,
    skillSet: skillSetReducer,
    projects: projectsReducer,
    certifications: certificationsReducer,
    additionalSection: additionalSectionReducer,
    // Add other reducers here
  },
});

export default store;
