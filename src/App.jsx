import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavMenu from './components/NavMenu'
import HeaderBanner from './components/HeaderBanner'
import MyQualities from './components/MyQualities/MyQualities'

function App() {


  return (
    <div>
      <NavMenu></NavMenu>
      <HeaderBanner></HeaderBanner>
      <MyQualities></MyQualities>
    </div>
  )
}

export default App
