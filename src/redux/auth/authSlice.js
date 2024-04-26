import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { app, auth } from 'auth/base';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = response.user;
      const serializableUserData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
      console.log('serializableUserData: ', serializableUserData);
      return serializableUserData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunkWithGoogle = createAsyncThunk(
  'auth/registerWithGoogle',
  async (_, thunkAPI) => {
    try {
      const provider = new GoogleAuthProvider();

      const response = await signInWithPopup(auth, provider);

      const user = response.user;
      console.log('user: ', user);
      const serializableUserData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };
      console.log('serializableUserData: ', serializableUserData);
      return serializableUserData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await new Promise((resolve, reject) => {
        try {
          getAuth(app).signOut();
          resolve();
        } catch (error) {
          reject(error);
        }
      });

      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isLoading: false,
  user: {
    email: null,
    displayName: null,
    uid: null,
    photoURL: null,
  },
  authenticated: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder

      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
      })
      .addCase(registerThunkWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })

      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          registerThunkWithGoogle.pending,
          logoutThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          registerThunkWithGoogle.rejected,
          logoutThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
