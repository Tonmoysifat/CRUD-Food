import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateFoodPage from "./pages/CreateFoodPage.jsx";
import FoodContentPage from "./pages/FoodContentPage.jsx";
import Loader from "./loaders/Loader.jsx";
import UpdateFoodPage from "./pages/UpdateFoodPage.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CreateFoodPage/>}/>
                    <Route path="/allFood" element={<FoodContentPage/>}/>
                    <Route path="/update/:id" element={<UpdateFoodPage/>} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;