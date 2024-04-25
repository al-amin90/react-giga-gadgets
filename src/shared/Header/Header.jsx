import { useState } from "react";
import logo from "../../assets/imgs/logo.png"
import profile from "../../assets/imgs/user-profile.png"
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";

const Header = () => {
    const navigate = useNavigate()
    const [userOpen, setUserOpen] = useState(false);

    const { user, singOut } = useAuth()
    const location = useLocation()


    const handleLogOut = () => {
        singOut()
            .then(result => {
                alert("Log out successfully")
                setUserOpen(false)
            })
    }


    return (
        <div className='max-w-[1920px] mx-auto'>
            <header className='bg-white shadow-lg flex w-full px-5'>
                <Link to="/" className='md:border-r flex flex-shrink-0 items-center'>
                    <img
                        className="md:w-[200px] w-[150px] h-[70px]  object-cover"
                        src={logo} alt="" />
                </Link>

                {/* middle  */}
                <nav className="header-links md:contents font-medium text-base  hidden ">
                    <ul className="flex gap-8 items-center ml-4 xl:ml-8 mr-auto w-full justify-center">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                            ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                                            : "hover:text-[#FF497C]"
                                }
                            >
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addProduct"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                            ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                                            : "hover:text-[#FF497C]"
                                }
                            >
                                <span>Add Product</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myCart"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                            ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                                            : "hover:text-[#FF497C]"
                                }
                            >
                                <span>My Cart</span>
                            </NavLink>
                        </li>

                    </ul>
                </nav>

                {/* end  */}
                <div className="relative md:border-l flex items-center  justify-end w-full md:w-auto pl-5 ">
                    {user ? (
                        <button
                            onClick={() => setUserOpen(!userOpen)}
                            className="border-2 border-[#FF497C] rounded-full w-[50px] h-[50px]"
                        >
                            <img
                                src={user?.photoURL || profile}
                                alt=""
                                className="w-full h-full object-cover rounded-full"
                            />
                        </button>
                    ) : location.pathname === "/signIn" ? (

                        <button
                            onClick={() => navigate("/register")}
                            className="bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
                        >
                            Register
                        </button>
                    ) : (

                        <button
                            onClick={() => navigate("/signIn")}
                            className="bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
                        >
                            Login
                        </button>
                    )

                    }

                    {/* user Menu */}
                    <div
                        className={`absolute text-center ${userOpen ? "block" : "hidden"
                            } flex flex-col justify-center items-center gap-4  shadow-lg bg-white px-8 py-4 top-16 z-50`}
                    >
                        <p className="text-lg font-semibold">{user?.displayName}</p>

                        <button
                            onClick={() => handleLogOut()}
                            className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded cursor-pointer"
                        >
                            logout
                        </button>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Header;