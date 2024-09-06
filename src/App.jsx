import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";


function App() {
  
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mt-24 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
