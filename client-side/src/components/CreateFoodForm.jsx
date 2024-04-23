import React, {useState} from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import Loader from "../loaders/Loader.jsx";
import Helper from "../utility/Helper.js";

const CreateFoodForm = () => {
    const [loader, setLoader] = useState(false);
    let navigate = useNavigate()
    const foodInfo = async (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        let foodName = formData.get("foodName")
        let foodCode = formData.get("foodCode")
        let foodImg = formData.get("foodImg")
        let foodCategory = formData.get("foodCategory")
        let qty = formData.get("qty")
        let price = formData.get("price")
        setLoader(true);
        let res = await axios.post(`${Helper.BaseApi()}/createFood`, {
            foodName: foodName,
            foodCode: foodCode,
            foodImg: foodImg,
            foodCategory: foodCategory,
            qty: qty,
            price: price
        })
        if (res.data["status"] === "success") {
            toast.success(res.data["message"])
            setTimeout(() => {
                navigate("/allFood")
            }, 2000)
        } else {
            toast.error("Request Fail")
        }
    }

    return (
        <div className="container mt-5">
            {
                loader ? (
                    <Loader/>
                ) : (
                    <>
                        <h1 className="acTxt" style={{position: "relative", right: "28px"}}>Create Food Item</h1>
                        <form onSubmit={foodInfo} className="addingform">
                            <div className="row formRow">
                                <div className="mb-5 col-lg-4 col-12">
                                    <label htmlFor="exampleInputFoodName" className="form-label">Food Name</label>
                                    <input type="text" className="form-control" id="exampleInputFoodName"
                                           name="foodName" required />
                                </div>
                                <div className="mb-5 col-lg-4">
                                    <label htmlFor="exampleInputFoodCode" className="form-label">Food Code</label>
                                    <input type="text" className="form-control" id="exampleInputFoodCode"
                                           name="foodCode" required />
                                </div>
                                <div className="mb-5 col-lg-4">
                                    <label htmlFor="exampleInputFoodImage" className="form-label">Food Image</label>
                                    <input type="text" className="form-control" id="exampleInputFoodImage"
                                           name="foodImg" required />
                                </div>
                                <div className="mb-5 col-lg-4">
                                    <label htmlFor="exampleInputFoodCategory" className="form-label">Food
                                        Category </label>
                                    <input type="text" className="form-control" id="exampleInputFoodCategory"
                                           name="foodCategory" required />
                                </div>
                                <div className="mb-5 col-lg-4">
                                    <label htmlFor="exampleInputQTY" className="form-label">QTY</label>
                                    <input type="text" className="form-control" id="exampleInputQTY" name="qty" required />
                                </div>
                                <div className="mb-5 col-lg-4">
                                    <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                                    <input type="text" className="form-control" id="exampleInputPrice" name="price" required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary ButtON">Submit</button>
                        </form>
                    </>
                )
            }

        </div>
    );
};

export default CreateFoodForm;