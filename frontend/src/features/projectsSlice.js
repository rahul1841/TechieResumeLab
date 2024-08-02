import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    expandedProject: null,
    projectsOpen: false,
  },
  reducers: {
    toggleProjectsOpen(state) {
      state.projectsOpen = !state.projectsOpen;
    },
    toggleDetailsOpen(state, action) {
      state.expandedProject = state.expandedProject === action.payload ? null : action.payload;
    },
    addProject(state) {
      const newProject = {
        id: Date.now(),
        name: '',
        technologies: '',
        link: '',
        description: '',
      };
      state.projects.push(newProject);
    },
    removeProject(state, action) {
      state.projects = state.projects.filter(project => project.id !== action.payload);
    },
    updateProject(state, action) {
      const { id, key, value } = action.payload;
      const project = state.projects.find(project => project.id === id);
      if (project) {
        project[key] = value;
      }
    },
  },
});

export const { toggleProjectsOpen, toggleDetailsOpen, addProject, removeProject, updateProject } = projectsSlice.actions;
export default projectsSlice.reducer;
