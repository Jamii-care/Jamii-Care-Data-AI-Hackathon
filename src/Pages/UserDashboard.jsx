import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";
import BGImage from '../assets/euro.jpg'

const UserDashboard = () => {

return (
    <div>
        <div className="flex h-[91vh]">
            {/* Sidebar section */}
            <div className="md:w-[20%] bg-tertiarygray block ">
                    <Sidebar/>
            </div>

            {/* Content area */}
            <div className="flex-grow bg-primarywhite relative">
                <img src={BGImage} alt="background image" className="absolute inset-0 object-cover w-full h-full z-0 blur-[2px]"/>
                <div className="relative z-10">
                    <Outlet/>
                </div>
            </div>
        </div>
    </div>
);
};

export default UserDashboard;
