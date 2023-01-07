import { createSlice } from '@reduxjs/toolkit';

const initialStateVal = ""

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateVal },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        },
    }
});


//to be able to use our reducer actions  we export 
//the actions in the userSlice
export const { changeColor } = themeSlice.actions


export default themeSlice.reducer
