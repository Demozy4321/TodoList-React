import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails:{
        email: "",
        fullName: "",
        userName: "",
        createdOn: null,
        updatedOn: null,
    },
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{

        setUser: (state,action) => {
            console.log(action.payload);
            state.isLoggedIn = true;
            console.log(state.isLoggedIn);

        }
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;