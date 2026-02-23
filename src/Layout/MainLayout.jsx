import Footer from "@/Component/Footer"
import Header from "@/Component/header/Header"
import { useState } from "react";
import { Outlet } from "react-router-dom"

const Layout =() => {
    const [mobileOpen, setMobileOpen] = useState(false);


    return (
        <>
            <div className='d-flex flex-column bg-light' style={{minHeight: '100vh'}}>
                <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
                    <main style={{ display: mobileOpen ? 'none' : 'block'}}>
                        <Outlet/>
                    </main>
                <Footer />
            </div>
        </>
    )
};

export default Layout;