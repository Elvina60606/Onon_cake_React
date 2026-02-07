import Footer from "@/Component/Footer"
import Header from "@/Component/Header"
import { Outlet } from "react-router-dom"

const Layout =() => {
    console.log('Layout rendered');


    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                    
                <Footer />
            </div>
        </>
    )
};

export default Layout;