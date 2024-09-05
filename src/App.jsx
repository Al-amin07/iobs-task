import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";


function App() {
  
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mt-24 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
