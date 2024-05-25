import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const isUserExits = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: isUserExits ? isUserExits : null,
    route: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(getRoute.fulfilled, (state, action) => {
        state.route = action.payload;
      });
  },
});

export const logOutUser = createAsyncThunk("LOGOUT/AUTH", async () => {
  localStorage.removeItem("user");
});
export const getRoute = createAsyncThunk("ROUTE/ROUTER", async (route) => {
  return route;
});

export default authSlice.reducer;
export const {setUser} = authSlice.actions
