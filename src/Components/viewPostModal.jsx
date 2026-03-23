import {  X } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';

const ViewPostModal = ({id,showModal,setShowModal}) => {
    const posts=useSelector(state=>state.user)
    const singalpost=posts.data.filter(post=>post.id===id)
    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-[#3b4046]">
  <div className="text-2xl p-6 max-w-sm bg-[#FFFFFF] rounded-lg shadow-xl p-4 w-3/4 md:min-w-sm relative">
  <div>
    <button onClick={()=>setShowModal(false)} className='absolute right-5'><X/></button>
  </div>
<div>
<h2>Name: {singalpost[0].name}</h2>
<p>Email: {singalpost[0].email}</p>
<p>Age: {singalpost[0].age}</p>
<p>Gender: {singalpost[0].gender}</p>
</div>
  </div>
</div>
    );
};

export default ViewPostModal;