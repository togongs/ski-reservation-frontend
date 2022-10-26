import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// initialState 의 기본 타입을 인터페이스로 지정
interface IAuth {
  login_id: string | null;
  password: string | null;
  // name: string | null;
  // phone: string | null;
  authenticate: boolean;
  error: object | null;
}

const initialState: IAuth = {
  login_id: null,
  password: null,
  // name: null,
  // phone: null,
  authenticate: false,
  error: null,
};

export interface authData {
  login_id: string | null;
  password: string | null;
  // name: string | null;
  // phone: string | null;
  authenticate: boolean;
}
export const login = createAsyncThunk(
  'auth/login',
  async (data: authData, thunkAPI) => {
    const { login_id, password, authenticate } = data;
    try {
      console.log('data', data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// export const register = createAsyncThunk(
//   'auth/login',
//   async (data: authData, thunkAPI) => {
//     const { login_id, password,name,email,phone } = data;
//     try {
//       console.log('data', data);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

export const logout = createAsyncThunk(
  'auth/logout',
  async (data: authData, thunkAPI) => {
    const { login_id, password, authenticate } = data;
    try {
      console.log('data', data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action: AnyAction) => {
      console.log('pending 상태', action); // Promise가 pending일때 dispatch
    }),
      builder.addCase(login.fulfilled, (state, action: AnyAction) => {
        console.log('fulfilled 상태', action); // Promise가 fullfilled일 때 dispatch
        state.login_id = action.payload.login_id;
        state.password = action.payload.password;
        state.authenticate = action.payload.authenticate;
        // state.authenticate = action.payload.authenticate;
      }),
      builder.addCase(login.rejected, (state, action: AnyAction) => {
        console.log('rejected 상태', action); // Promise가 rejected일 때 dispatch
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      });

    builder.addCase(logout.pending, (state, action: AnyAction) => {
      console.log('pending 상태', action); // Promise가 pending일때 dispatch
    }),
      builder.addCase(logout.fulfilled, (state, action: AnyAction) => {
        console.log('fulfilled 상태', action); // Promise가 fullfilled일 때 dispatch
        state.login_id = action.payload.login_id;
        state.password = action.payload.password;
        state.authenticate = action.payload.authenticate;
        // state.authenticate = action.payload.authenticate;
      }),
      builder.addCase(logout.rejected, (state, action: AnyAction) => {
        console.log('rejected 상태', action); // Promise가 rejected일 때 dispatch
        // state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
