// userSlice.js
// Import both APIs
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDataAPI, getDataAPI } from '../../Services/allAPI';

// Async thunk to send data to backend using addDataAPI
export const sendUserData = createAsyncThunk(
    'user/sendUserData',
    async (userData, { rejectWithValue }) => {
      try {
        // Call addDataAPI with userData as parameter
        const response = await addDataAPI(userData);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  // Async thunk to fetch data from backend
  export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async (_, { rejectWithValue }) => {
      try {
        const response = await getDataAPI();  // Call the API to get user data
        return response.data;  // Return the data from the response
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  const userSlice = createSlice({
    name: 'user',
    initialState: { data: {}, status: null, error: null },
    reducers: {
      updateUserData: (state, action) => {
        state.data = action.payload;
      },
      resetUserData: (state) => {
        state.data = {};  // Reset data to initial empty state
      },
    },
    extraReducers: (builder) => {
      builder

      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;  // Store fetched data
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
        .addCase(sendUserData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(sendUserData.fulfilled, (state, action) => {
          state.status = 'success';
          state.data = action.payload;
        })
        .addCase(sendUserData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        
    },
  });
  
  export const { updateUserData,resetUserData } = userSlice.actions;
  export default userSlice.reducer;