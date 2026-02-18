import Footer from "@/Component/Footer"
import Header from "@/Component/header/Header"
import { Outlet } from "react-router-dom"

const Layout =() => {

    return (
        <>
                <Header />
                <Outlet />
                <Footer />
        </>
    )
};

export default Layout;