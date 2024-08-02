import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  educationOpen: false,
  languages: [],
  libraries: [],
  tools: [],
  databases: [],
  languageInput: '',
  libraryInput: '',
  toolInput: '',
  databaseInput: ''
};

const skillSetSlice = createSlice({
  name: 'skillSet',
  initialState,
  reducers: {
    toggleEducationOpen: (state) => {
      state.educationOpen = !state.educationOpen;
    },
    setLanguageInput: (state, action) => {
      state.languageInput = action.payload;
    },
    setLibraryInput: (state, action) => {
      state.libraryInput = action.payload;
    },
    setToolInput: (state, action) => {
      state.toolInput = action.payload;
    },
    setDatabaseInput: (state, action) => {
      state.databaseInput = action.payload;
    },
    addLanguage: (state, action) => {
      if (action.payload.trim() !== '') {
        state.languages.push(action.payload.trim());
      }
    },
    addLibrary: (state, action) => {
      if (action.payload.trim() !== '') {
        state.libraries.push(action.payload.trim());
      }
    },
    addTool: (state, action) => {
      if (action.payload.trim() !== '') {
        state.tools.push(action.payload.trim());
      }
    },
    addDatabase: (state, action) => {
      if (action.payload.trim() !== '') {
        state.databases.push(action.payload.trim());
      }
    },
    removeLanguage: (state, action) => {
      state.languages = state.languages.filter(skill => skill !== action.payload);
    },
    removeLibrary: (state, action) => {
      state.libraries = state.libraries.filter(skill => skill !== action.payload);
    },
    removeTool: (state, action) => {
      state.tools = state.tools.filter(skill => skill !== action.payload);
    },
    removeDatabase: (state, action) => {
      state.databases = state.databases.filter(skill => skill !== action.payload);
    }
  }
});

export const {
  toggleEducationOpen,
  setLanguageInput,
  setLibraryInput,
  setToolInput,
  setDatabaseInput,
  addLanguage,
  addLibrary,
  addTool,
  addDatabase,
  removeLanguage,
  removeLibrary,
  removeTool,
  removeDatabase
} = skillSetSlice.actions;

export default skillSetSlice.reducer;
