import { useState } from 'react'
import HelloWorld from './HelloWorld'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import EmployeeComponent from './components/EmployeeComponent'

// React routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  /*return (
    <> 
    <HelloWorld/>
    </>
  )*/
  return (
    <> 
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      {/* for comment enter cntrl + /  in jsx */}
      {/*  http://localhost:3000 */}
      <Route path='/' element = { <ListEmployeeComponent/>}/>

      {/* http://localhost:3000/employees  */}
      <Route path='/employees' element = { <ListEmployeeComponent/>}/>

      <Route path='/add-employee' element = { <EmployeeComponent/>}/>


       </Routes>
    <FooterComponent/>
</BrowserRouter>
    </>
  )
}

export default App
