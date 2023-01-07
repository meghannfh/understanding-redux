import { createSlice } from '@reduxjs/toolkit';

const initialStateVal = { name: "Lee Jinki", age: 33, email: "shineeworld@sm.com" }

export const userSlice = createSlice({
    name: "user",
    //initialState will always have a value property
    initialState: { value: initialStateVal },
    //reducers are the functions that alter the values in the initial State
    reducers: {
        //reducers take in a function with two parameters
        //state will be equal to the initial state and will
        //change if the state changes
        //the action is an object which can contain a payload
        //and type
        //
        login: (state, action) => {
            //inside the function we grab whatever we have for
            //the state and change it based on the information 
            //saved in the payload
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialStateVal
        },
    }
});


//to be able to use our reducer actions  we export 
//the actions in the userSlice
export const { login, logout } = userSlice.actions


export default userSlice.reducer
