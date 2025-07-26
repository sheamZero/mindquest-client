import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CloseOutlined, AlignLeftOutlined } from '@ant-design/icons';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-custom-primary font-semibold" : "text-black"
                }
            >Home</NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "text-custom-primary font-semibold" : "text-black"
                }
            >       About      </NavLink>
            <NavLink
                to="/services"
                className={({ isActive }) =>
                    isActive ? "text-custom-primary font-semibold" : "text-black"
                }
            >
                Services
            </NavLink>
            <NavLink
                to="/blog"
                className={({ isActive }) =>
                    isActive ? "text-custom-primary font-semibold" : "text-black"
                }
            >
                Blog
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive ? "text-custom-primary font-semibold" : "text-black"
                }
            >
                Contact
            </NavLink>
            {/* Optional: My Orders (conditionally shown later) */}
            {/* <NavLink to="/myOrders" className="text-black">My Orders</NavLink> */}
        </>
    );

    return (
        <nav className="bg-white shadow-sm px-4 py-4 lg:px-10">
            <div className="flex items-center justify-between">
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


                {/* Center Nav Items (Large Screen) */}
                <div className="hidden lg:flex gap-6 items-center">{navItems}</div>

                {/* Right: Placeholder for future buttons */}
                <div className="hidden lg:flex gap-4">
                    {/* <button className="btn-style">Orders</button>
          <button className="btn-style">Sign In</button> */}
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
