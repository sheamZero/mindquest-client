import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";


const MainLayout = () => {
    return (


        <div>
            <div className="max-w-7xl mx-auto">
                <header>
                    <Navbar></Navbar>
                </header>
                <main>
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