import axios from "axios";
import Login from "./Component/Login/Login.jsx";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import OrdersList from "./pages/OrdersList";
import Coupon from "./pages/Coupon";


function App() {
  const basename = import.meta.env.DEV ? "/" : "/Onon_cake_React";

  return (

    <>
      <div>
        <Header />
        <Coupon />
        <Footer />
      </div>
    </>
  )
}

export default App;