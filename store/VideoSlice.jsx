import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name : 'Video_redux',
    initialState :{
        videos : []
    },
    reducers :{
        put_video : (state,action)=>{
            state.videos.push(action.payload)
        }
    }
})

export const {put_video} = VideoSlice.actions
export default VideoSlice.reducer