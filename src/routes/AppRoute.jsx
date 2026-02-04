import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Register from "../components/Register"
import Login from "../components/Login"
import ContentNav from "../components/ContentNav"

const AppRoute = () => {
  return (
    <>
    
    <Routes>
    <Route element={<ContentNav/>}>
       <Route path="/" element={<Home/>}/>
    </Route>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>

    </Routes>
    
    </>
  )
}

export default AppRoute