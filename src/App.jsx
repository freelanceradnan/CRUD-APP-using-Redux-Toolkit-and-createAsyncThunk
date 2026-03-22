import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Navbar/Navbar'
import CreatePost from './Navbar/CreatePost'
import { Provider } from 'react-redux'
import { store } from './app/Store'

function App() {


  return (
    <Provider store={store}>
       <Navbar/>
    <CreatePost/>
    </Provider>
  )
}

export default App
