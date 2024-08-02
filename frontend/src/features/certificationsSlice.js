// src/redux/certificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const certificationsSlice = createSlice({
  name: 'certifications',
  initialState: {
    certifications: [], // Start with an empty array
    certificationsOpen: false,
    expandedCertification: null,
  },
  reducers: {
    toggleCertificationsOpen(state) {
      state.certificationsOpen = !state.certificationsOpen;
    },
    toggleDetailsOpen(state, action) {
      state.expandedCertification = state.expandedCertification === action.payload ? null : action.payload;
    },
    addCertification(state) {
      state.certifications.push({ id: state.certifications.length + 1, name: '', link: '', issuedBy: '' });
    },
    removeCertification(state, action) {
      state.certifications = state.certifications.filter(cert => cert.id !== action.payload);
    },
    updateCertification(state, action) {
      const { id, key, value } = action.payload;
      const certification = state.certifications.find(cert => cert.id === id);
      if (certification) {
        certification[key] = value;
      }
    }
  },
});

export const {
  toggleCertificationsOpen,
  toggleDetailsOpen,
  addCertification,
  removeCertification,
  updateCertification,
} = certificationsSlice.actions;

export default certificationsSlice.reducer;
