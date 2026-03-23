import {Eye,Pencil,Trash} from 'lucide-react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser } from '../feature/userDetails';
import ViewPostModal from '../Components/viewPostModal';
import { Link } from 'react-router';

const AllPosts = () => {
   
    const [showModal,setShowModal]=useState(false)
    const [radioData,setRadioData]=useState("")
    
    const [id,setId]=useState()
    const {isError,isLoading,error,data,searchData}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(getUser())
    },[dispatch])
    if(isLoading){
        return <h2 className='flex items-center justify-center'>Loading Data ...</h2>
    }
    if(isError){
        return <h2 className='text-2xl text-center flex items-center justify-center'>failed to fetch!</h2>
    }
   const filteredData = data && data
        .filter((ele) => {
            if (searchData.length === 0) return ele;
            return ele.name.toLowerCase().includes(searchData.toLowerCase());
        })
        .filter((ele) => {
            if (radioData === "male") return ele.gender === "male";
            if (radioData === "female") return ele.gender === "female";
            return ele;
        });
    return (
<>
<div className='bg-slate-50 max-w-full pt-4 min-h-screen'>
    <div className='flex items-center justify-center gap-6'>
    <div>
    <label htmlFor="all">ALL</label>
    <input type="radio" name="radio" id="all" checked={radioData===""} onChange={(e)=>setRadioData("")}/>
    </div>
    <div>
    <label htmlFor="male">MALE</label>
    <input type="radio" name="radio" id="male" checked={radioData==='male'} onChange={(e)=>setRadioData(e.target.value)} value="male"/>
    </div>
    <div>
    <label htmlFor="female">FEMALE</label>
    <input type="radio" name="radio" id="female" checked={radioData==='female'} onChange={(e)=>setRadioData(e.target.value)} value="female"/>
    </div>
    </div>
    {showModal && <ViewPostModal id={id} showModal={showModal} setShowModal={setShowModal}/>}
   {filteredData && filteredData.length>0?
     filteredData.map((ele)=>(
            <div className='py-2' key={ele.id}>
            

<div className="bg-gradient-to-b from-blue-100 to-white block w-3/4 md:max-w-sm rounded-base shadow-xs mx-auto p-4 rounded-sm shadow-2xl shadow-blue-500">
<div>
    
</div>
    <h2 className="text-body mb-2 text-xl">| User Details:</h2>
    
    <p className="text-body mb-2">Name:{ele.name}</p>
    <p className="text-body mb-2">Email:{ele.email}</p>
    <p className="text-body mb-2">Age:{ele.age}</p>
    <div className='flex items-center justify-center gap-3'>
    <button className='p-1 bg-blue-500 rounded-sm flex items-center justify-center gap-2 text-white' onClick={()=>[setId(ele.id),setShowModal(true)]}><Eye size={15}/>view</button>
   <Link to={`/edit/${ele.id}`}><button className='p-1 bg-blue-500 rounded-sm flex items-center justify-center gap-2 text-white'><Pencil size={15}/>Edit</button></Link>
   <button className='p-1 bg-blue-500 rounded-sm flex items-center justify-center gap-2 text-white' onClick={()=>dispatch(deleteUser(ele.id))}><Trash size={15}/>delete</button>
    </div>
</div>

        </div>
))
:
<div className='text-center mt-10'>
                    <h2 className='text-xl text-gray-500 font-semibold text-red-500'>No Data Found on {radioData?radioData:<h2>Database</h2>}!</h2>
                    <p className='text-gray-400'>Try changing your search or filter settings.</p>
                </div>
}
</div>
</>
    );
};

export default AllPosts;