import Banner from "../../components/homePage/Banner/Banner";
import InteractivePoll from "../../components/homePage/InteractivePoll/InteractivePoll";
import LearningResource from "../../components/homePage/LearningResource/LearningResource";
import Newsletter from "../../components/homePage/Newsletter/Newsletter";
import RecentBlogs from "../../components/homePage/RecentBlogs/RecentBlogs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <InteractivePoll></InteractivePoll>
            <LearningResource></LearningResource>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;