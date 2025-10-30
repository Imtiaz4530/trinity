import {Route, Routes} from "react-router-dom"
import { useQuery } from "@tanstack/react-query";

import Home from "./Pages/home/Home"
import Register from "./Pages/register/Register"
import Login from "./Pages/login/Login"
import Story from "./Pages/Post/Story"
import PostStory from "./Pages/PostStory/PostStory"
import { useEffect, useState } from "react"
import { fetchStories } from "./api/storyApi"
import Navbar from "./Pages/navbar/Navabar"


const App = () => {
  // const [stories, setStories] = useState([]);
  // const [loading, setLoading] = useState(true);

  const { data: stories = [], isLoading: loading } = useQuery({
    queryKey: ["stories"],
    queryFn: fetchStories,
  });


  // useEffect(() => {
  //   const loadStories = async () => {
  //     try {
  //       const data = await fetchStories();
  //       setStories(data);
  //     } catch (error) {
  //       console.error("Error fetching stories:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadStories();
  // }, []);

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home stories={stories} loading={loading}/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/postStory" element={<PostStory />} />
      
      <Route path="/story/:id" element={<Story stories={stories} loading={loading}/>} />

    </Routes>
    </>
  )
}

export default App
