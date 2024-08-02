import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sectionOpen: false,
  honorsAwards: [],
};

const additionalSectionSlice = createSlice({
  name: 'additionalSection',
  initialState,
  reducers: {
    toggleSectionOpen(state) {
      state.sectionOpen = !state.sectionOpen;
    },
    addHonorAward(state, action) {
      state.honorsAwards.push(action.payload);
    },
    removeHonorAward(state, action) {
      state.honorsAwards = state.honorsAwards.filter(item => item.id !== action.payload);
    },
    updateHonorAward(state, action) {
      const { index, value } = action.payload;
      state.honorsAwards[index].name = value;
    },
  },
});

export const { toggleSectionOpen, addHonorAward, removeHonorAward, updateHonorAward } = additionalSectionSlice.actions;

export default additionalSectionSlice.reducer;
