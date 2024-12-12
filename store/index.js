import { configureStore, createSlice } from "@reduxjs/toolkit";

const intialAuthState = {
  id: "",
  name: "",
  email: "",
  token: "",
  isLoggedin: false,
  isLoading: true,
};
const authSlice = createSlice({
  name: "auth",
  initialState: intialAuthState,
  reducers: {
    restoreToken(state, action) {
      if (action.payload.user) {
        const { _id, name, email } = action.payload.user;
        state._id = _id;
        state.name = name;
        state.email = email;
      }
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedin = true;
    },
    login(state, action) {
      console.log('loginDispatch--->',action.payload);
      const { _id, name, email, token } = action.payload;
      state._id = _id;
      state.email = email;
      state.name = name;
      state.token = token;
      state.isLoggedin = true;
      state.isLoading = false;
    },
    logout(state, action) {
      return {
        ...intialAuthState,
        isLoading: false,
        isLoggedin: false,
      };
    },
  },
});
const initialUserState = {
  id: "",
  name: "",
  email: "",
  isCompleted: false,
  dispensaryAddress: null,
  degree: "",
  specialisation: "",
  specialisation_degree: "",
  superSpecialisation: "",
  superSpecialisation_degree: "",
  otherDetails:"",
};
const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    addUser(state, action) {
      console.log('paylod-->',action.payload);
      const {
        _id,
        name,
        email,
        isCompleted,
        dispensaryAddress,
        degree,
        otherDetails,
        specialisation,
        specialisation_degree,
        superSpecialisation,
        superSpecialisation_degree,
      } = action.payload.user;
      state._id = _id;
      state.name = name;
      state.email = email;
      state.isCompleted = isCompleted;
      state.dispensaryAddress = dispensaryAddress;
      state.degree = degree;
      state.specialisation = specialisation;
      state.specialisation_degree = specialisation_degree;
      state.superSpecialisation = superSpecialisation;
      state.superSpecialisation_degree = superSpecialisation_degree;
      state.otherDetails = otherDetails;
    },
    removeUser(state, action) {
        return{
            ...initialUserState
        }
    },
  },
});
export const store = configureStore({
  reducer: { auth: authSlice.reducer, user: userSlice.reducer },
});
export const { login, restoreToken, logout } = authSlice.actions;
export const { addUser, removeUser } = userSlice.actions;
