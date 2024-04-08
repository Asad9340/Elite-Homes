import NavBar from "../Shared/NavBar/NavBar";
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
function Root() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mx-4 md:mx-0">
        <NavBar />
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
}

export default Root;
