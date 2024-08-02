import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const educationInfoSlice = createSlice({
  name: 'educationInfo',
  initialState,
  reducers: {
    setEducationInfo: (state, action) => {
      const { index, field, value } = action.payload;
      state[index] = {
        ...state[index],
        [field]: value,
      };
    },
    addEducation: (state) => {
      state.push({
        institution: '',
        location: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        score: '',
        scoreType: '',
      });
    },
    removeEducation: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { setEducationInfo, addEducation, removeEducation } = educationInfoSlice.actions;
export default educationInfoSlice.reducer;
