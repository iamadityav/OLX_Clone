import { createSlice } from "@reduxjs/toolkit";
export const PostSlice = createSlice({
    name: "Post",
    initialState: {
        data:[],
    },
    reducers: {
        addPost(state,action){
            state.data.push(action.payload); 
        },
        addToWishlist(state,action){
            state.data.push(action.payload); 
        },
    }
})

export const { addPost,addToWishlist} = PostSlice.actions;
export default PostSlice.reducer;