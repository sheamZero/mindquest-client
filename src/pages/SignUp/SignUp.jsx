import { useForm } from "react-hook-form";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useAuth();
    const [passError, setPassError] = useState("");

    const onSubmit = (data) => {
        if (data.password !== data.confirm_pass) {
            setPassError("Passwords do not match");
            return;
        }
        if (data.password.length < 6) {
            setPassError("Password must be at least 6 characters");
            return;
        }

        setPassError("");

        registerUser(data.email, data.password)
            .then(res => {
                toast.success("User create successfully!");
                console.log(res.user)
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center px-4 py-10">
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar></ToastContainer>
            <div className="w-full max-w-md bg-card dark:bg-cardDark border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block mb-1 text-sm text-paragraph dark:text-paragraphDark">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Sheam Hossain"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c3a] text-heading dark:text-white focus:outline-accent"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className="text-red-500">Full name is required</span>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-sm text-paragraph dark:text-paragraphDark">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c3a] text-heading dark:text-white focus:outline-accent"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 text-sm text-paragraph dark:text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c3a] text-heading dark:text-white focus:outline-accent"
                            {...register("password")}
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block mb-1 text-sm text-paragraph dark:text-gray-300">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c3a] text-heading dark:text-white focus:outline-accent"
                            {...register("confirm_pass")}
                        />
                    </div>

                    {/* Password Error */}
                    {passError && (
                        <p className="text-sm text-red-500 mt-1">{passError}</p>
                    )}

                    {/* Submit Button */}
                    <input
                        type="submit"
                        value={"Sign Up"}
                        className="w-full py-2 rounded-lg bg-accent text-white font-semibold hover:brightness-95 hover:shadow transition"
                    />
                </form>

                {/* OR divider */}
                <div className="my-6 flex items-center justify-between gap-4">
                    <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600"></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">or</span>
                    <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600"></div>
                </div>

                {/* Social Buttons */}
                <div className="flex items-center justify-center gap-4">
                    <button className="p-2 border rounded-full border-gray-300 dark:border-gray-600 hover:bg-accent hover:text-white transition">
                        <FaGoogle className="text-xl" />
                    </button>
                    <button className="p-2 border rounded-full border-gray-300 dark:border-gray-600 hover:bg-accent hover:text-white transition">
                        <FaGithub className="text-xl" />
                    </button>
                    <button className="p-2 border rounded-full border-gray-300 dark:border-gray-600 hover:bg-accent hover:text-white transition">
                        <FaFacebookF className="text-xl" />
                    </button>
                </div>

                {/* Login Redirect */}
                <p className="text-sm text-paragraph dark:text-gray-400 text-center mt-6">
                    Already have an account?{" "}
                    <Link to={"/signin"} className="text-accent font-medium hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
