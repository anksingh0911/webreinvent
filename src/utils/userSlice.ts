import { createSlice } from "@reduxjs/toolkit";


interface initialState {
  isLogin: boolean;
  isLogout: boolean;
  userInfo: {id?: string, token: string},
  errors: string
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    isLogout:false,
    userInfo: {id: '', token:''},
    errors: null
  },
  reducers: {
    loginLogout:(state, action)=>{
      state.isLogin = action.payload
    },
    logout:(state, action)=>{
      state.isLogin = action.payload
    },
    userRegistration:(state, action)=>{
      console.log(action.payload)
      state.userInfo = action.payload
    },
    userError:(state,action)=>{
      state.errors = action.payload
    }
  }
})

export const {loginLogout, userRegistration, userError} = userSlice.actions;
export default userSlice.reducer;