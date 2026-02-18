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
import FaqPage from "../pages/FaqPage"
import Myths from "../pages/Myths"
import Profile from "../auth/Profile"
import ContactSupport from "../pages/ContactSupport"
import ProtectedRoute from "./ProtectedRoute"



const AppRoute = () => {
  return (
    <>

      <Routes>

        <Route element={<ContentNav />}>
          <Route path="/" element={<Home />} />
        </Route>


        <Route element={<ProtectedRoute />}>
          <Route element={<ContentNav />}>
            <Route path="/donorpage" element={<DonorPage />} />
            <Route path="/finderspage" element={<FindersPage />} />
            <Route path="/mainhome" element={<MainHome />} />
            <Route path="/bloodtypes" element={<BloodTypes />} />
            <Route path="/donationprocess" element={<DonationProcess />} />
            <Route path="/healthbenefits" element={<HealthBenefits />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/myths" element={<Myths />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<ContactSupport />} />
          </Route>
        </Route>


        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>

    </>
  )
}

export default AppRoute