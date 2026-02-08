import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import ContentNav from "../components/ContentNav"
import Login from "../auth/Login"
import Register from "../auth/Register"
import DonorPage from "../pages/DonorPage"
import FindersPage from "../pages/FindersPage"
import MainHome from "../pages/MainHome"
import BloodTypes from "../pages/BloodTypes"
import DonationProcess from "../pages/DonationProcess"
import HealthBenefits from "../pages/HealthBenefits"


const AppRoute = () => {
  return (
    <>
    
    <Routes>
    <Route element={<ContentNav/>}>
       <Route path="/" element={<Home/>}/>
       <Route path="/donorpage" element={<DonorPage/>}/>
       <Route path="/finderspage" element={<FindersPage/>}/>
       <Route path="/mainhome" element={<MainHome/>}/>
       <Route path="/bloodtypes" element={<BloodTypes/>}/>
       <Route path="/donationprocess" element={<DonationProcess/>}/>
       <Route path="/healthbenefits" element={<HealthBenefits/>}/>
     
    </Route>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>

    </Routes>
    
    </>
  )
}

export default AppRoute