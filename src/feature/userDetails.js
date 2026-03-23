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
//getposts action
export const getUser=createAsyncThunk("getUser",async (_, { rejectWithValue })=>{
  
  try{
    const response=await fetch(`https://69c002a272ca04f3bcba4ccc.mockapi.io/userDetails/crud`)
    if (!response.ok) {
        throw new Error("failed to fetch");
      }
    const result=await response.json()
    return result
  }
  catch(error){
    return rejectWithValue(error.message);
  }
})
//delete action
export const deleteUser=createAsyncThunk("deleteUser",async(id,{rejectWithValue})=>{
   const response=await fetch(`https://69c002a272ca04f3bcba4ccc.mockapi.io/userDetails/crud/${id}`,{
    method:"DELETE"
   })
   try{
   const result=await response.json()
   return result
   }
   catch(error){
   return rejectWithValue(error.message)
   }
})
//update action
export const updateUser=createAsyncThunk("updateUser",async(data)=>{
   const response=await fetch(`https://69c002a272ca04f3bcba4ccc.mockapi.io/userDetails/crud/${data.id}`,{
    method:"PUT",
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
        error:"",
        searchData:[]
    },
    reducers:{
      searchData:(state,action)=>{
       
        state.searchData=action.payload
        
      }
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
      .addCase(getUser.pending, (state, action) => {
        state.isLoading=true,
        state.isError=false
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading=false,
        state.data=action.payload
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading=false,
        state.isError=true,
        state.error=action.payload
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading=true,
        state.isError=false
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading=false;
        const {id}=action.payload
        if(id){
          state.data=state.data.filter(ele=>ele.id!==id)
        }
        
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading=false,
        state.isError=true,
        state.error=action.payload
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading=true,
        state.isError=false
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading=false
        state.data=state.data.map((ele)=>
          ele.id===action.payload.id? action.payload:ele
        )
        
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading=false,
        state.isError=true,
        state.error=action.payload.error||"failed to fetch"
      })
    }
})
export const {searchData}=userDetailsSlice.actions
export const {isError,isLoading,error,data}=userDetailsSlice