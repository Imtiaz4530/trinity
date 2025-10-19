import {Route, Routes} from "react-router-dom"

import Home from "./Pages/home/Home"
import Register from "./Pages/register/Register"
import Login from "./Pages/login/Login"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
