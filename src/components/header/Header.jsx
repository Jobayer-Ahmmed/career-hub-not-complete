import {Link, NavLink} from "react-router-dom"
const Header = () => {
    const links = 
    <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink className="font-medium" to="/statistics">Statistics</NavLink></li>
        <li><NavLink className="font-medium" to="/applied-jobs">Applied Jobs</NavLink></li>
        <li><NavLink className="font-medium" to="/blog">Blog</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 px-xPadding">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-3xl font-extrabold">CareerHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="#" className=" btn text-xl text-white font-extrabold rounded-lg capitalize    bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Star Appling</Link>
      </div>
    </div>
  );
};

export default Header;