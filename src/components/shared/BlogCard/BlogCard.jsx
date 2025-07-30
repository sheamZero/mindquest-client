import { Tooltip } from "antd";
import { FaHeart, FaArrowRight } from "react-icons/fa";

const BlogCard = ({ fake }) => {
    return (
        <div className="p-6 relative w-full max-w-2xl flex flex-col justify-between rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group">

            {/* Tilted Image Banner */}
            <div className="relative overflow-hidden border-2 border-card rounded-lg h-48">
                <img
                    src={fake.image}
                    alt={fake.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 border-2 font-bold border-accent group-hover:bg-accent group-hover:text-white text-accent px-3 py-1 rounded-full text-xs ">
                    {fake.category}
                </div>
            </div>

            {/* Content */}
            <div className="mt-5">
                <div>
                    <h3 className="text-2xl font-bold text-heading dark:text-white leading-snug">
                        {fake.title}
                    </h3>
                    <p className="text-paragraph dark:text-gray-300 text-base leading-relaxed line-clamp-3">
                        {fake.shortDescription}
                    </p>
                </div>

                {/* Buttons Row */}
                <div className="flex items-center justify-between pt-3">
                    <button className="flex items-center gap-1 text-base font-medium hover:text-accent hover:scale-105 py-2  transition">
                        Read More <FaArrowRight className="text-xs" />
                    </button>
                    <Tooltip title={"Added to the wishlist"} position={"top"}>
                        <button
                            className="p-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition"
                            title="Add to Wishlist"
                        >
                            <FaHeart />
                        </button>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
