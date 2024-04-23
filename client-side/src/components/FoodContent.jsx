import React, {useEffect, useState} from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";
import Loader from "../loaders/Loader.jsx";
import Helper from "../utility/Helper.js";

const FoodContent = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        (async () => {
            await callFoodList()
        })()
    }, []);

    const callFoodList = async () => {
        try {
            const res = await axios.get(`${Helper.BaseApi()}/readFood`);
            const productData = res.data["message"];
            setData(productData);
            setLoader(false);
        } catch (e) {
            setLoader(false);
        }
    };

    const deleteFoodItem = async (id) => {
        try {
            setLoader(true);
            const res = await axios.get(`${Helper.BaseApi()}/deleteFood/${id}`);
            setTimeout(async () => await callFoodList(), 2000)
            if (res.data["status"] === "success") {
                toast.success(res.data["message"])
            } else {
                toast.error("Request Fail");
            }
        } catch (e) {
            setLoader(false);
        }
    };
    return (
        <div className="container mt-5">
            {
                loader ? (
                    <Loader/>

                ) : (
                    <>
                        {
                            data.length === 0 ? (
                                <h1 className="middleOfThePage">No Food Available</h1>

                            ) : (
                                <>
                                    <h1 className="acTxt">All Food List</h1>
                                    <div className="row g-4 my-5">
                                        {
                                            data.map((items, i) => {
                                                return (
                                                    <div className="col-lg-3" key={i}>
                                                        <div className="card position-relative">
                                                            <img
                                                                src={items["foodImg"]}
                                                                className="card-img-top" alt="..."/>
                                                            <div className="position-absolute">
                                                                <h5><span
                                                                    className="badge text-bg-secondary">Tk: {items["price"]}</span>
                                                                </h5>
                                                            </div>
                                                            <div className="card-body">
                                                                <h5 className="card-title">{items["foodName"]}
                                                                </h5>
                                                                <Link to={`/update/${items["_id"]}`}
                                                                      className="btn btn-primary me-3 mt-4 foodbtnE">Edit</Link>
                                                                <button onClick={()=>deleteFoodItem(items["_id"])}
                                                                      className="btn btn-primary me-3 mt-4 foodbtnD">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                            )
                        }
                    </>
                )
            }
        </div>
    );
};

export default FoodContent;