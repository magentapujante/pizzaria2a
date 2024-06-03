import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home'
const App = ()  => {

  const [color] = useState("#00ff00")
  document.body.style.backgroundColor = color

return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
)
}
export default App