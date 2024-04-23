import React from 'react';
import SideNavbar from "../components/SideNavbar.jsx";
import FoodContent from "../components/FoodContent.jsx";
import {Toaster} from "react-hot-toast";

const FoodContentPage = () => {
    return (
        <div className="row container foodCon">
            <Toaster/>
            <div className="col-lg-2 col-12">
                <SideNavbar/>
            </div>
            <div className="col-lg-10 col-12">
                <FoodContent/>
            </div>
        </div>
    );
};

export default FoodContentPage;