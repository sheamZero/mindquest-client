import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CloseOutlined, AlignLeftOutlined } from '@ant-design/icons';
import { Button } from "antd";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = true;

    const navItems = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-custom-primary font-semibold" : "text-black"
                }
            >Home</NavLink>
            <NavLink
                to="/addBlog"
                className={({ isActive }) =>
                    isActive ? "text-custom-primary font-semibold" : "text-black"
                }
            >Add Blog</NavLink>
            <NavLink
                to="/allBlogs"
                className={({ isActive }) =>
                    isActive ? "text-custom-primary font-semibold" : "text-black"
                }
            >
                All Blogs
            </NavLink>
            <NavLink
                to="/featuredBlogs"
                className={({ isActive }) =>
                    isActive ? "text-custom-primary font-semibold" : "text-black"
                }
            >
                Featured Blogs
            </NavLink>
            <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                    isActive ? "text-custom-primary font-semibold" : "text-black"
                }
            >
                Wishlist
            </NavLink>
        </>
    );

    return (
        <nav className="bg-white shadow-sm px-4 lg:px-0 py-4 ">
            <div className="flex items-center justify-between">
                <div>
                    {/* Left: Hamburger menu (mobile only) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden focus:outline-none"
                    >
                        {isOpen ? (
                            <CloseOutlined className="text-2xl text-black" />
                        ) : (
                            <AlignLeftOutlined className="text-2xl text-black" />
                        )}
                    </button>

                    {/* logo */}

                    <Button type="text">MindQuest</Button>
                </div>

                {/* Center Nav Items (Large Screen) */}
                <div className="hidden lg:flex gap-6 items-center">{navItems}</div>


                <div>
                    {
                        !user
                            ?
                            (<div className="flex items-center gap-4">
                                <NavLink to="/wishlist"
                                    className={({ isActive }) =>
                                        isActive ? "text-custom-primary font-semibold" : "text-black"
                                    }>
                                    signin
                                </NavLink>
                                <NavLink to="/wishlist"
                                    className={({ isActive }) =>
                                        isActive ? "text-custom-primary font-semibold" : "text-black"
                                    }>
                                    sing up
                                </NavLink>
                            </div>)
                            :
                            (<div className="flex items-center gap-3">
                                <img
                                    src={user.photoURL}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <button className="px-3 py-1 border border-red-400 text-red-400 hover:bg-red-400 hover:text-white rounded transition">
                                    Logout
                                </button>
                            </div>)
                    }
                </div>
            </div>



            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="flex flex-col gap-4 mt-4 lg:hidden">{navItems}</div>
            )}
        </nav>
    );
};

export default NavBar;
