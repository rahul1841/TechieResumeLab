// src/features/experienceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    experiences: [{ id: 1 }],
    expandedExperience: null,
    experienceOpen: false,
  };
  

const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    toggleExperienceOpen(state) {
      state.experienceOpen = !state.experienceOpen;
    },
    toggleDetailsOpen(state, action) {
      state.expandedExperience = state.expandedExperience === action.payload ? null : action.payload;
    },
    addExperience(state) {
      state.experiences.push({ id: state.experiences.length + 1 });
    },
    removeExperience(state, action) {
      state.experiences = state.experiences.filter((experience) => experience.id !== action.payload);
    },
    updateExperience(state, action) {
      const { id, key, value } = action.payload;
      const experience = state.experiences.find((exp) => exp.id === id);
      if (experience) {
        experience[key] = value;
      }
    },
  },
});

export const { toggleExperienceOpen, toggleDetailsOpen, addExperience, removeExperience, updateExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
