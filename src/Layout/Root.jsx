import NavBar from "../Shared/NavBar/NavBar";
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Footer from "../Shared/Footer/Footer";
function Root() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mx-4 md:mx-0">
        <NavBar />
        <Outlet />
        <Footer/>
      </div>
      <Toaster />
    </div>
  );
}

export default Root;
