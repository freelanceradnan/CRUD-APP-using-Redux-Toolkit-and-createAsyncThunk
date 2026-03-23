import React from 'react';
import { createBrowserRouter } from 'react-router';
import Rootlayout from '../pages/Rootlayout';
import CreatePost from '../Components/CreatePost';
import AllPosts from '../pages/AllPosts';
import UpdatePost from '../pages/UpdatePost';

const router=createBrowserRouter([
    {path:"/",element:<Rootlayout/>,children:[
    {path:"/",index:true,element:<CreatePost/>},
    {path:"/all-posts",element:<AllPosts/>},
    {path:"/edit/:id",element:<UpdatePost/>}
    ]}
])


export default router;