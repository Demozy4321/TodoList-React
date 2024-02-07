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
            state.userDetails = action.payload;
            if(action.payload)
            {
                state.isLoggedIn = true;
            }

        },

        logOutUser: (state) => {
            state.isLoggedIn = false;
        }
    }
})

export const {setUser,logOutUser} = userSlice.actions;
export default userSlice.reducer;