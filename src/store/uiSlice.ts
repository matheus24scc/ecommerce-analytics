import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isOpen: boolean; // for sidebar
}

const initialState: UiState = {
  isOpen: true, // sidebar open by default on desktop
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarOpen } = uiSlice.actions;
export default uiSlice.reducer;
