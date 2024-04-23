import React, {useEffect, useState} from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "../loaders/Loader.jsx";
import Helper from "../utility/Helper.js";

const UpdateFoodForm = () => {
    const [loader, setLoader] = useState(false);
    let [food, setfood] = useState(null);
    let navigate = useNavigate()
    let {id} = useParams()

    useEffect(() => {
        (async () => {
            await availableFood(id)
        })()
    }, []);

    const availableFood = async (id) => {
        let res = await axios.get(`${Helper.BaseApi()}/readBYId/${id}`)
        setfood(res.data["message"][0])
    }
    const updateFoodInfo = async (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        let foodName = formData.get("foodName")
        let foodCode = formData.get("foodCode")
        let foodImg = formData.get("foodImg")
        let foodCategory = formData.get("foodCategory")
        let qty = formData.get("qty")
        let price = formData.get("price")
        setLoader(true);
        let res = await axios.post(`${Helper.BaseApi()}/updateFood/${id}`, {
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
                        <h1 className="acTxt" style={{position: "relative", right: "28px"}}>Update Food Item</h1>
                        <form onSubmit={updateFoodInfo} className="addingform">
                            <div className="row formRow">
                                <div className="mb-5 col-lg-4 col-12">
                                    <label htmlFor="exampleInputFoodName" className="form-label">Food Name</label>
                                    <input defaultValue={food !== null ? (food["foodName"]) : ""} type="text" className="form-control" id="exampleInputFoodName"
                                           name="foodName"/>
                                </div>
                                <div className="mb-5 col-lg-4">
                                    <label htmlFor="exampleInputFoodCode" className="form-label">Food Code</label>
                                    <input defaultValue={food !== null ? (food["foodCode"]) : ""} type="text" className="form-control" id="exampleInputFoodCode"
                                           name="foodCode"/>
                                </div>
                                <div className="mb-5 col-lg-4">
                                    <label htmlFor="exampleInputFoodImage" className="form-label">Food Image</label>
                                    <input defaultValue={food !== null ? (food["foodImg"]) : ""} type="text" className="form-control" id="exampleInputFoodImage"
                                           name="foodImg"/>
                                </div>
                                <div className="mb-5 col-lg-4">
                                    <label htmlFor="exampleInputFoodCategory" className="form-label">Food
                                        Category </label>
                                    <input defaultValue={food !== null ? (food["foodCategory"]) : ""} type="text" className="form-control" id="exampleInputFoodCategory"
                                           name="foodCategory"/>
                                </div>
                                <div className="mb-5 col-lg-4">
                                    <label htmlFor="exampleInputQTY" className="form-label">QTY</label>
                                    <input defaultValue={food !== null ? (food["qty"]) : ""} type="text" className="form-control" id="exampleInputQTY" name="qty"/>
                                </div>
                                <div className="mb-5 col-lg-4">
                                    <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                                    <input defaultValue={food !== null ? (food["price"]) : ""} type="text" className="form-control" id="exampleInputPrice" name="price"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary ButtON">Update</button>
                        </form>
                    </>
                )
            }
        </div>
    );
};

export default UpdateFoodForm;