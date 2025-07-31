import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CloseOutlined, AlignLeftOutlined } from '@ant-design/icons';
import { Button, Tooltip } from "antd";
import { IoIosLogOut } from "react-icons/io";
import { FcIdea } from "react-icons/fc";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cssss = "text-heading dark:text-headingDark font-semibold scale-105 duration-150 ease-in-out transition ";
    const [theme, setTheme] = useTheme();
    const { logoutUser, users } = useAuth();

    // logout
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success("Logout success!");
            })
            .catch(err => toast.error({ err }))

    }

    const navItems = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? cssss : "text-heading dark:text-headingDark font-medium"
                }
            >Home</NavLink>
            <NavLink
                to="/addBlog"
                className={({ isActive }) =>
                    isActive ? cssss : "text-heading dark:text-headingDark font-medium"
                }
            >Add Blog</NavLink>
            <NavLink
                to="/allBlogs"
                className={({ isActive }) =>
                    isActive ? cssss : "text-heading dark:text-headingDark font-medium"
                }
            >
                All Blogs
            </NavLink>
            <NavLink
                to="/featuredBlogs"
                className={({ isActive }) =>
                    isActive ? cssss : "text-heading dark:text-headingDark font-medium"
                }
            >
                Featured Blogs
            </NavLink>
            <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                    isActive ? cssss : "text-heading dark:text-headingDark font-medium"
                }
            >
                Wishlist
            </NavLink>
        </>
    );

    return (
        <nav className="bg-primary dark:bg-primaryDark shadow-sm px-4 dark:shadow-lg md:px-12 dark:border-accentDark lg:px-24 py-6">
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar ></ToastContainer>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    {/* Left: Hamburger menu (mobile only) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden focus:outline-none"
                    >
                        {isOpen ? (
                            <CloseOutlined className="text-2xl text-black dark:text-headingDark" />
                        ) : (
                            <AlignLeftOutlined className="text-2xl text-black dark:text-headingDark" />
                        )}
                    </button>

                    {/* logo */}
                    <Button type="text" className="text-xl md:text-2xl flex items-center justify-center gap-0 font-semibold text-heading dark:text-headingDark">
                        <FcIdea className="font-bold text-2xl md:text-3xl" />
                        <span>MindQuest</span>
                    </Button>
                </div>

                {/* Center Nav Items (Large Screen) */}
                <div className="hidden lg:flex gap-6 items-center">{navItems}</div>

                <div className="flex items-center justify-between gap-3">
                    <div>
                        {
                            !users
                                ?
                                (<div className="flex items-center gap-4">
                                    <NavLink to="/signin"
                                        className={({ isActive }) =>
                                            isActive ? cssss : "text-heading dark:text-headingDark"
                                        }>
                                        Sign in
                                    </NavLink>
                                    <NavLink to="/signup"
                                        className={({ isActive }) =>
                                            isActive ? cssss : "text-heading dark:text-headingDark"
                                        }>
                                        Sing up
                                    </NavLink>
                                </div>)
                                :
                                (<div className="flex items-center gap-3">
                                    <img
                                        src={users.photoURL}
                                        alt="Profile"
                                        className="w-10 h-10 border-2 rounded-full object-cover"
                                    />
                                    <Tooltip title={"Logout"} placement="bottom">
                                        <div
                                            onClick={handleLogout}
                                            className="w-10 h-10 text-white bg-accent dark:bg-accentDark cursor-pointer rounded-full flex items-center justify-center">
                                            <IoIosLogOut className="text-3xl font-bold" />
                                        </div>
                                    </Tooltip>
                                </div>)
                        }
                    </div>
                    <button className="p-1 text-3xl cursor-pointer text-heading dark:text-headingDark" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {
                            theme === "dark" ? <BiToggleRight /> : <BiToggleLeft />
                        }
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="flex flex-col bg-primary dark:bg-primaryDark w-full left-0 p-4 absolute gap-4 mt-4 lg:hidden">
                    {navItems}
                </div>
            )}
        </nav>
    );
};

export default NavBar;
