import {Route, Routes} from "react-router-dom"

import Home from "./Pages/home/Home"
import Register from "./Pages/register/Register"
import Login from "./Pages/login/Login"
import Story from "./Pages/Post/Story"
import PostStory from "./Pages/PostStory/PostStory"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/postStory" element={<PostStory />} />
      
      <Route path="/story" element={<Story />} />

    </Routes>
  )
}

export default App
