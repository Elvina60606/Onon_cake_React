
import axios from "axios";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import OrdersList from "./pages/OrdersList";
import Coupon from "./pages/Coupon";


function App() {


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

export default App
