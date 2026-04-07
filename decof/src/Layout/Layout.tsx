import { Outlet } from "react-router-dom"
import Header from "../Pages/Static/Header"
import Footer from "../Pages/Static/Footer"


const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout