import { configureStore } from "@reduxjs/toolkit";
import isMenuopen from './store/MenuSlice'
import VideoSlice from "./store/VideoSlice";

const store = configureStore({
    reducer :{
        Menu_redux : isMenuopen,
        Video_redux : VideoSlice
    }
})

export default store