import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";


const MainLayout = () => {
    return (


        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="max-w-7xl mx-auto">

                <main className="my-5 lg:my-10">
                    <Outlet></Outlet>
                </main>
            </div>

            <footer className="w-full">
                <Footer></Footer>
            </footer>
        </div>

    );
};

export default MainLayout;