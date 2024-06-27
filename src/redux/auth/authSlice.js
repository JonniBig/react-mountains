import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { auth, db } from 'auth/base';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

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
      await setDoc(doc(db, 'users', user.uid), serializableUserData);

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

      const userSnapshot = await getDoc(doc(db, 'users', user.uid));

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        const serializableUserData = {
          uid: userData.uid,
          email: userData.email,
          displayName: userData.displayName,
          photoURL: userData.photoURL,
        };
        return serializableUserData;
      }

      const serializableUserData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };

      await setDoc(doc(db, 'users', user.uid), serializableUserData);
      return serializableUserData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunkWithGithub = createAsyncThunk(
  'auth/registerWithGithub',
  async (_, thunkAPI) => {
    try {
      const provider = new GithubAuthProvider();

      const response = await signInWithPopup(auth, provider);

      const user = response.user;

      const userSnapshot = await getDoc(doc(db, 'users', user.uid));

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        const serializableUserData = {
          uid: userData.uid,
          email: userData.email,
          displayName: userData.displayName,
          photoURL: userData.photoURL,
        };
        return serializableUserData;
      }

      const serializableUserData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };
      await setDoc(doc(db, 'users', user.uid), serializableUserData);
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
          auth.signOut();
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
  reducers: {
    setAuthenticated: (state, action) => {
      state.authenticated = true;
      state.user = action.payload;
    },
  },
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
      .addCase(registerThunkWithGithub.fulfilled, (state, action) => {
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
          logoutThunk.pending,
          registerThunkWithGithub.pending
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
          logoutThunk.rejected,
          registerThunkWithGithub.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { setAuthenticated } = authSlice.actions;
export const authReducer = authSlice.reducer;
