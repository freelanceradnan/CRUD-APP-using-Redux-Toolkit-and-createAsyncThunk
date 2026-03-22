import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import  router  from './router/Router.jsx'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './app/Store';



createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
<RouterProvider router={router}></RouterProvider>
    </Provider>

)
