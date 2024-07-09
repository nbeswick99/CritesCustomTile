import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './views/Home.jsx'
import ShowOne from './views/ShowOne.jsx'
import Form from './views/Form.jsx'
import Update from './views/Update.jsx'


function App() {

  return (
    <main>
        
        <hr />
        <Routes>
          <Route path='/' element={<><Navbar title="Crite Custom Tile " /><Home /></>} />
          <Route path='/clients/:id' element={<ShowOne/>} />
          <Route path='/clients/new' element={<Form />} />
          <Route path="/clients/:id/update" element={<Update />} />
        </Routes>
    </main>
  )
}

export default App
