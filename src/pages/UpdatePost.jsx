import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { updateUser } from '../feature/userDetails';

const UpdatePost = () => {
    const navigate=useNavigate()
    const {data,loading}=useSelector(state=>state.user)
    const {id}=useParams()
    const dispatch=useDispatch()
    const [update,setUpdate]=useState()
    useEffect(() => {
        if (id && data) {

            const singleUser = data.find(user => user.id === id);
            if (singleUser) {
                setUpdate(singleUser);
            }
        }
    }, [id, data]);
    const newUpdate=(e)=>{
        setUpdate({...update,[e.target.name]:e.target.value})
        
    }
   
    const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(updateUser(update))
    navigate("/all-posts")
    }
   
    return (
        <div>
            <div className='min-h-screen w-full bg-gradient-to-b from-[#f06288] via-[#D1E9FF] to-[#FFFFFF] pt-10 md:pt-20'>

<form className="w-1/2 md:max-w-md mx-auto" onSubmit={submitHandler}>

    <h2 className='text-blue-500 font-semibold'>|Updata Data</h2>
  <div className="relative z-0 w-full mb-5 group mt-4">
      <input type="text" name="name" className="block py-2 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder="" required value={update && update.name} onChange={newUpdate}/>
      <label className="absolute text-sm text-body duration-300 transform -translate-y-8 scale-75 top-3 -z-10 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto pb-2">Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder="" required value={update && update.email} onChange={newUpdate}/>
      <label className="absolute text-sm text-body duration-300 transform -translate-y-7 scale-75 top-3 -z-10 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="number" name="age" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required value={update && update.age} onChange={newUpdate}/>
      <label className="absolute text-sm text-body duration-300 transform -translate-y-7 scale-75 top-3 -z-10  peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Age</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div>
    <label htmlFor="male">Male</label>
  <input type="radio" id="male"  name="gender" value="male" checked={update && update.gender==='male'} onChange={newUpdate}/>
  </div>
  <div>
    <label htmlFor="female">Female</label>
  <input type="radio" id="female"  name="gender" value="female" checked={update && update.gender==='female'} onChange={newUpdate}/>
  </div>
   
  </div>
  
  <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-blue-500 mt-4">Update</button>
</form>

</div>
        </div>
    );
};

export default UpdatePost;