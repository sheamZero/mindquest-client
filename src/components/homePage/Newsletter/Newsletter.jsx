import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            toast.error("Please enter a valid email address.");
            return;
        }

        toast.success(" Thank you for subscribing to our newsletter!");
        setEmail("");
    };

    return (
        <section className="bg-gradient-to-tr from-[#fdfbfb] to-[#ebedee] dark:from-[#1e1e29] dark:to-[#292b36] py-14 px-6 rounded-xl shadow-lg mx-auto mb-20">
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-heading dark:text-headingDark flex items-center justify-center gap-2">
                    <MdOutlineMarkEmailRead />
                    Join Our Newsletter
                </h2>
                <p className="text-paragraph dark:text-paragraphDark my-3 text-sm md:text-base">
                    Get weekly insights, blog updates, and tech trends delivered straight to your inbox.
                </p>
            </div>

            <form
                onSubmit={handleSubscribe}
                className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6"
            >
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 w-full md:w-1/3 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-[#1c1d26] dark:text-white focus:outline-accent transition"
                />
                <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-2 text-heading dark:text-white border-2 border-accent font-semibold hover:bg-accent hover:text-white rounded-full hover:scale-105 transition"
                >
                    Subscribe
                </button>
            </form>
        </section>
    );
};

export default Newsletter;
