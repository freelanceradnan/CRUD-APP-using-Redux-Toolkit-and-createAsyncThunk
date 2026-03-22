import React from 'react';
import { createBrowserRouter } from 'react-router';
import Rootlayout from '../pages/Rootlayout';
import CreatePost from '../Navbar/CreatePost';
import AllPosts from '../pages/AllPosts';

const router=createBrowserRouter([
    {path:"/",element:<Rootlayout/>,children:[
    {path:"/",index:true,element:<CreatePost/>},
    {path:"/all-posts",element:<AllPosts/>}
    ]}
])


export default router;