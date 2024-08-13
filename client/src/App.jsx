import './App.css'
import { Routes, Route } from 'react-router-dom'

// Client View imports
import Home from './views/Home.jsx'
import Backsplash from './views/Backsplash.jsx'
import Shower from './views/Shower.jsx'
import TileFloor from './views/TileFloor.jsx'
// import VinylFloor from './views/VinylFloor.jsx'
// import HardwoodFloor from './views/HardwoodFloor.jsx'

//Admin View imports 
import Admin from './views/Admin.jsx'
import AdminHome from './views/AdminHome.jsx'


function App() {

  return (
    <main>
        <Routes>
          {/* Client Side Routes */}
          <Route path='/' element={<Home/>}/>
          <Route path='/Backsplash' element={<Backsplash/>}/>
          <Route path='/Shower' element={<Shower/>}/>
          <Route path='/TileFloor' element={<TileFloor/>}/>
          {/* <Route path='/VinylPlankFloor' element={<VinylFloor/>}/> */}
          {/* <Route path='/HardwoodFloor' element={<HardwoodFloor/>}/> */}

          {/* Admin Routes */}
          <Route path='/admin' element ={<Admin/>}/>
          <Route path='/admin/home' element={<AdminHome/>}/>
        </Routes>
    </main>
  )
}

export default App
