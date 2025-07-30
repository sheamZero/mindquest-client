import { FaFacebookF, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10 pb-6">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-accent">TechTrek</h2>
                    <p className="text-sm text-gray-300 mt-2">
                        Your destination for learning, building, and growing through tech.
                        Explore blogs, tutorials, and interactive resources.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
                        <li><Link to="/blogs" className="hover:text-accent transition">Blogs</Link></li>
                        <li><Link to="/featured" className="hover:text-accent transition">Featured</Link></li>
                        <li><Link to="/wishlist" className="hover:text-accent transition">Wishlist</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Newsletter</h3>
                    <p className="text-sm text-gray-300 mb-2">
                        Subscribe to get updates about new blogs and tutorials.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="px-4 py-2 rounded-md text-black w-full sm:w-auto"
                        />
                        <button
                            type="submit"
                            className="bg-accent hover:brightness-110 px-4 py-2 rounded-md text-white font-medium transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Follow Us</h3>
                    <div className="flex items-center gap-4 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaFacebookF /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaGithub /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaTwitter /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} TechTrek. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
