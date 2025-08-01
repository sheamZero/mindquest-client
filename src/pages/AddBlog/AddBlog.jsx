
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import { AiOutlineEdit, AiOutlinePicture, AiOutlineTags, AiOutlineInfoCircle, AiOutlineFileText } from 'react-icons/ai';


const AddBlog = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="min-h-screen bg-primary dark:bg-primaryDark text-heading p-2 dark:text-headingDark">
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

            {/* Banner */}
            <div className="w-full bg-card dark:bg-accentDark py-14 rounded-lg flex flex-col items-center justify-center dark:text-white text-center">
                <h1 className="text-4xl font-bold mb-2">Create & Share Your Thoughts</h1>
                <p className="text-sm max-w-md px-4">
                    Use the form below to share your blog with the world. Let your words inspire, inform, and entertain.
                </p>
            </div>

            {/* Blog Form */}
            <div className="w-full mx-auto py-6 md:py-10 max-w-7xl">
                <div className="bg-card dark:bg-cardDark border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 md:p-10 w-full">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Post a New Blog</h2>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6"
                    >
                        {/* Title */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm text-paragraph dark:text-paragraphDark flex items-center gap-1">
                                <AiOutlineEdit /> Blog Title
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., How to Start Coding in 2025"
                                {...register('title', { required: 'Title is required' })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c3a] text-heading dark:text-white focus:outline-accent"
                            />
                            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                        </div>

                        {/* Image URL */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm text-paragraph dark:text-paragraphDark flex items-center gap-1">
                                <AiOutlinePicture /> Image URL
                            </label>
                            <input
                                type="text"
                                placeholder="https://example.com/image.jpg"
                                {...register('imageUrl', { required: 'Image URL is required' })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c3a] text-heading dark:text-white focus:outline-accent"
                            />
                            {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl.message}</p>}
                        </div>

                        {/* Category Dropdown */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm text-paragraph dark:text-paragraphDark flex items-center gap-1">
                                <AiOutlineTags /> Category
                            </label>
                            <select
                                {...register('category', { required: 'Category is required' })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c3a] text-heading dark:text-white focus:outline-accent"
                            >
                                <option value="">Select a category</option>
                                <option value="tech">Tech</option>
                                <option value="lifestyle">Lifestyle</option>
                                <option value="travel">Travel</option>
                                <option value="health">Health</option>
                            </select>
                            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                        </div>

                        {/* Short Description */}
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm text-paragraph dark:text-paragraphDark flex items-center gap-1">
                                <AiOutlineInfoCircle /> Short Description
                            </label>
                            <textarea
                                rows={2}
                                placeholder="A quick summary of your blog..."
                                {...register('shortDesc', { required: 'Short description is required' })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c3a] text-heading dark:text-white focus:outline-accent resize-none"
                            />
                            {errors.shortDesc && <p className="text-red-500 text-sm mt-1">{errors.shortDesc.message}</p>}
                        </div>

                        {/* Long Description (full width) */}
                        <div className="md:col-span-2 flex flex-col">
                            <label className="mb-1 text-sm text-paragraph dark:text-paragraphDark flex items-center gap-1">
                                <AiOutlineFileText /> Long Description
                            </label>
                            <textarea
                                rows={8}
                                placeholder="Write your full blog content here..."
                                {...register('longDesc', { required: 'Long description is required' })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c3a] text-heading dark:text-white focus:outline-accent resize-y"
                            />
                            {errors.longDesc && <p className="text-red-500 text-sm mt-1">{errors.longDesc.message}</p>}
                        </div>

                        {/* Submit Button (full width) */}
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="w-full py-3 rounded-lg bg-accent text-white font-semibold hover:brightness-95 hover:shadow transition"
                            >
                                Publish Blog
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;
