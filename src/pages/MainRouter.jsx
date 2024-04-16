import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";

const MainRouter = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default MainRouter