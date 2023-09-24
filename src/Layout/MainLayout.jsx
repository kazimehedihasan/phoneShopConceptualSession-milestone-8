import { Outlet } from "react-router-dom";
import Navebar from "../components/Header/Navebar";


const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navebar></Navebar>
            <div className="py-10">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;