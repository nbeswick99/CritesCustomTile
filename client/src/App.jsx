import './App.css'
import { Routes, Route } from 'react-router-dom'

// Component imports 
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
// Client View imports
import Home from './views/Home.jsx'
import Backsplash from './views/Backsplash.jsx'

//Admin View imports 

// import ShowOne from './views/ShowOne.jsx'
// import Form from './views/Form.jsx'
// import Update from './views/Update.jsx'


function App() {

  return (
    <main>
        <Header />
        <Navbar />
        <Routes>
          {/* Client Side Routes */}
          <Route path='/' element={<Home/>}/>
          <Route past='/Backsplash' element={<Backsplash/>}/>

          {/* Admin Routes */}
          {/* <Route path='/clients/:id' element={<ShowOne/>} />
          <Route path='/clients/new' element={<Form />} />
          <Route path="/clients/:id/update" element={<Update />} /> */}
        </Routes>
    </main>
  )
}

export default App
