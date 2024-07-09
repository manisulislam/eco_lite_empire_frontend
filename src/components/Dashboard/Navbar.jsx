import PropTypes from 'prop-types';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <button className="md:hidden text-gray-800" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="text-xl font-bold">My Dashboard</div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Log Out</button>
      </div>
    </div>
  )
}

Navbar.propTypes = {
   
    toggleSidebar: PropTypes.func.isRequired,
  };

export default Navbar