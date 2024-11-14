import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { data: {}, status: null, error: null },
  reducers: {
    updateUserData: (state, action) => {
      state.data = action.payload;
    },
    submitUserData: (state) => {
      state.status = 'submitted';
      // Here, state.data already contains the user input data, so no further action is needed
    },
  },
});

export const { updateUserData, submitUserData } = userSlice.actions;
export default userSlice.reducer;