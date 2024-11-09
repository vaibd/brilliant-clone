import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cookies } from '../customHooks/useCookie';

interface User {
  id: string;
  email: string;
  name: string;
  // Add other user properties as needed
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: Cookies.get('token') || null,
  isAuthenticated: !!Cookies.get('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      
      // Save to cookies
      Cookies.set({
        name: 'token',
        value: action.payload.token,
        options: {
          expires: 7, // 7 days
          path: '/',
          secure: true,
          sameSite: 'Strict'
        }
      });
      
      Cookies.set({
        name: 'user',
        value: JSON.stringify(action.payload.user),
        options: {
          expires: 7,
          path: '/',
          secure: true,
          sameSite: 'Strict'
        }
      });
    },
    
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      
      // Remove cookies
      Cookies.delete('token');
      Cookies.delete('user');
    },
    
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      
      // Update user cookie
      Cookies.set({
        name: 'user',
        value: JSON.stringify(action.payload),
        options: {
          expires: 7,
          path: '/',
          secure: true,
          sameSite: 'Strict'
        }
      });
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;