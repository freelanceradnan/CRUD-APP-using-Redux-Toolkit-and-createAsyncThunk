import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//create action
export const createUser=createAsyncThunk("createUser",async(data)=>{
   const response=await fetch(`https://69c002a272ca04f3bcba4ccc.mockapi.io/userDetails/crud`,{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(data)
   })
   try{
   const result=await response.json()
   return result
   }
   catch(error){
 console.log(error.message)
   }
})

export const userDetailsSlice=createSlice({
    name:'userDetails',
    initialState:{
        isLoading:false,
        data:[],
        isError:false,
        error:""
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createUser.pending, (state, action) => {
        state.isLoading=true,
        state.isError=false
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading=false,
        state.data=action.payload
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading=false,
        state.isError=true,
        state.error=action.payload.error||"failed to fetch"
      })
    }
})