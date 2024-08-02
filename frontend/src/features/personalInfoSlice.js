// src/features/personalInfoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  jobTitle: '',
  links: [{ url: '', network: 'GitHub' }],
};

const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
    setLink: (state, action) => {
      const { index, field, value } = action.payload;
      state.links[index][field] = value;
    },
    addLink: (state) => {
      state.links.push({ url: '', network: 'GitHub' });
    },
    removeLink: (state, action) => {
      state.links.splice(action.payload, 1);
    },
  },
});

export const { setPersonalInfo, setLink, addLink, removeLink } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
