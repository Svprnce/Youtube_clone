import { createSlice } from "@reduxjs/toolkit";

const isMenuopen = createSlice({
    name : 'Menu_redux',
    initialState : {
        isMenuopen : true
    },
    reducers : {
        toggleMenu : (state)=>{
            state.isMenuopen = !state.isMenuopen;
        }
    }
})

export const {toggleMenu} = isMenuopen.actions
export default isMenuopen.reducer