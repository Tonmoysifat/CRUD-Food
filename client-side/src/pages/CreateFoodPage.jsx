import React from 'react';
import SideNavbar from "../components/SideNavbar.jsx";
import CreateFoodForm from "../components/CreateFoodForm.jsx";
import {Toaster} from "react-hot-toast";

const CreateFoodPage = () => {
    return (
        <div className="row container">
            <Toaster/>
            <div className="col-lg-3 col-12">
                <SideNavbar/>
            </div>
            <div className="col-lg-9 col-12 ">
                <CreateFoodForm/>
            </div>
        </div>
)
    ;
};

export default CreateFoodPage;