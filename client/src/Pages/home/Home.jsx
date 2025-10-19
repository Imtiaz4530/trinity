import {Link} from "react-router-dom"

import "../../App.css"

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
     
      <Link to="/register"> <button type="button">Register</button></Link>
      <Link to="/login"> <button type="button">Login</button></Link>

    </div>
  )
}

export default Home
