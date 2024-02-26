import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './Menu'
import News from './News'
function App() {
  return (
    <>
    <BrowserRouter>
      <Menu/>
        <Routes>
            <Route path='/' element={<News category='All' />} />
            <Route path='/sports' element=<News category='sports'/> />
            <Route path='/business' element=<News category='business'/> />
            <Route path='/technology' element =<News category='technology'/> />
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

