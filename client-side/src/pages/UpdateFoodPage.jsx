import React from 'react';
import {Toaster} from "react-hot-toast";
import SideNavbar from "../components/SideNavbar.jsx";
import UpdateFoodForm from "../components/UpdateFoodForm.jsx";

const UpdateFoodPage = () => {
    return (
        <div className="row container">
            <Toaster/>
            <div className="col-lg-3 col-12">
                <SideNavbar/>
            </div>
            <div className="col-lg-9 col-12 ">
                <UpdateFoodForm/>
            </div>
        </div>
    );
};

export default UpdateFoodPage;