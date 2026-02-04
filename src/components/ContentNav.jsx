import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const ContentNav = () => {
  return (
    <>
    
    <NavBar/>
    
    <Outlet/>
    
    <Footer/>
    
    </>
  )
}

export default ContentNav