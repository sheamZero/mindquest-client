
import BlogCard from '../../shared/BlogCard/BlogCard';
import fakeData from "../../../assets/fakeData.json"
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';


const RecentBlogs = () => {
    console.log(fakeData);


    return (
        <section className='my-20' >
            <h2 className="text-3xl md:text-4xl text-center font-bold text-heading mb-2">Discover Our Latest Blogs</h2>
            <p className="text-paragraph mx-auto mt-3 mb-5 text-center text-base md:text-lg max-w-2xl"> Stay updated with fresh perspectives, insightful stories, and the latest trends. Dive into what’s new and noteworthy from our community of writers.</p>


            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {
                    fakeData.map(fake => <BlogCard key={fake._id} fake={fake}></BlogCard>)
                }
            </motion.div>
            <div className='flex items-center justify-center my-5'>
                <Link to={"/addBlog"} className="mt-4 bg-accent text-white px-8 max-w-40 py-3 rounded-full hover:shadow hover:scale-105 hover:brightness-95 transition">
                    More
                </Link>
            </div>
        </section>
    );
};

export default RecentBlogs;