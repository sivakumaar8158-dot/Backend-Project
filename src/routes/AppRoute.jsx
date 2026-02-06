import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import ContentNav from "../components/ContentNav"
import Login from "../auth/Login"
import Register from "../auth/Register"
import DonorPage from "../pages/DonorPage"
import FindersPage from "../pages/FindersPage"

const AppRoute = () => {
  return (
    <>
    
    <Routes>
    <Route element={<ContentNav/>}>
       <Route path="/" element={<Home/>}/>
       <Route path="/donorpage" element={<DonorPage/>}/>
       <Route path="/finderspage" element={<FindersPage/>}/>
    </Route>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>

    </Routes>
    
    </>
  )
}

export default AppRoute