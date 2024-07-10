import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logout,reset} from "../../features/auth/authSlice"
import Swal from 'sweetalert2';

const Navbar = ({ toggleSidebar }) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleLogout=()=>{
    dispatch(logout())
    dispatch(reset())
    
    // navigate to login page
    navigate('/')
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'LogOut successfully. Please Sign in.',
      showConfirmButton: false,
      timer: 2500
    })
  }
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <button className="md:hidden text-gray-800" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="text-xl font-bold">My Dashboard</div>
      <div>
        <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded">Log Out</button>
      </div>
    </div>
  )
}

Navbar.propTypes = {
   
    toggleSidebar: PropTypes.func.isRequired,
  };

export default Navbar