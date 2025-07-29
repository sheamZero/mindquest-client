// import fakeData from '../../../../public/fakeData.json';
import BlogCard from '../../shared/BlogCard/BlogCard';
import fakeData from "../../../assets/fakeData.json"


const RecentBlogs = () => {
    console.log(fakeData);


    return (
        <section className='my-12' >
            <div className='grid grid-cols-3 gap-5' >
                {
                    fakeData.map(fake => <BlogCard key={fake._id} fake={fake}></BlogCard>)
                }
            </div>
        </section>
    );
};

export default RecentBlogs;