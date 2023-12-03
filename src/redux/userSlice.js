import { createSlice } from "@reduxjs/toolkit";
const initialState = { userInfo: {} };
const UserSlice = createSlice({
  name: "theUser",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
export const { setUserInfo } = UserSlice.actions;
export default UserSlice.reducer;
