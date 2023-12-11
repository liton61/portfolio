import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-green-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">My Portfolio</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="mx-2 font-medium"><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
                        <li className="mx-2 font-medium"><NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>About</NavLink></li>
                        <li className="mx-2 font-medium">
                            <NavLink
                                to="/myPostedJobs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Blogs
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;