import { IUserData } from '@interfaces/user';
import { createSlice } from '@reduxjs/toolkit';

interface IAuthSlice {
  OTP_HASH: string;
  IS_LOGGED: boolean;
  USER: IUserData | null;
  TOKEN: string | null;
  REFRESH_TOKEN: string | null;
}

const initialState: IAuthSlice = {
  OTP_HASH: '',
  IS_LOGGED: false,
  USER: null,
  TOKEN: null,
  REFRESH_TOKEN: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_USER_LOGGED_IN: (_, { payload }) => {
      return {
        OTP_HASH: '',
        IS_LOGGED: true,
        USER: payload.user,
        TOKEN: payload.token,
        REFRESH_TOKEN: payload.refresh_token
      };
    },
    SET_CHANGE_PROFILE_IMAGE: (state, { payload }) => {
      if (state.USER) {
        // eslint-disable-next-line no-param-reassign
        state.USER.profile_image = payload;
      }
    },
    SET_OTP_HASH: (_, { payload }) => {
      return { ..._, OTP_HASH: payload };
    },
    SET_USER_LOGGED_OUT: () => {
      return initialState;
    }
  }
});

export const {
  SET_USER_LOGGED_IN,
  SET_CHANGE_PROFILE_IMAGE,
  SET_OTP_HASH,
  SET_USER_LOGGED_OUT
} = authSlice.actions;

export default authSlice.reducer;
