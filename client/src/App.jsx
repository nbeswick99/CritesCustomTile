import './App.css'
import { Routes, Route } from 'react-router-dom'

// Component imports 
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
// Client View imports
import Home from './views/Home.jsx'
import Backsplash from './views/Backsplash.jsx'
import Shower from './views/Shower.jsx'
import TileFloor from './views/TileFloor.jsx'
import VinylFloor from './views/VinylFloor.jsx'
import HardwoodFloor from './views/HardwoodFloor.jsx'

//Admin View imports 

// import ShowOne from './views/ShowOne.jsx'
// import Form from './views/Form.jsx'
// import Update from './views/Update.jsx'


function App() {

  return (
    <main>
        <div className='bigheader'>
          <Header />
          <Navbar />
        </div>
        <Routes>
          {/* Client Side Routes */}
          <Route path='/' element={<Home/>}/>
          <Route path='/Backsplash' element={<Backsplash/>}/>
          <Route path='/Shower' element={<Shower/>}/>
          <Route path='/TileFloor' element={<TileFloor/>}/>
          <Route path='/VinylPlankFloor' element={<VinylFloor/>}/>
          <Route path='/HardwoodFloor' element={<HardwoodFloor/>}/>

          {/* Admin Routes */}
          {/* <Route path='/clients/:id' element={<ShowOne/>} />
          <Route path='/clients/new' element={<Form />} />
          <Route path="/clients/:id/update" element={<Update />} /> */}
        </Routes>
    </main>
  )
}

export default App
