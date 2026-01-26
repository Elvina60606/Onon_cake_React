import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";
import ListInfo from "./Component/ListInfo/ListInfo.jsx";
import Login from "./Component/Login/Login.jsx";

function App() {
  const basename = import.meta.env.DEV ? "/" : "/Onon_cake_React";

  return (
    <Router basename={basename}>
      <Header />
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<ListInfo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;