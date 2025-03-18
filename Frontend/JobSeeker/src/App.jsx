// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateSeeker from './CreateSeeker'
import ReadSeeker from './ReadSeeker'
import UpdateSeeker from './UpdateSeeker'
import DeleteSeeker from './DeleteSeeker'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/create" element={<CreateSeeker />} />
          <Route path="/read" element={<ReadSeeker />} />
          <Route path="/edit-seeker/:id" element={<UpdateSeeker />} />
          <Route path="/delete" element={<DeleteSeeker />} />
        </Routes>
      </div>
      
    </Router>
    </>
  )
}

export default App
