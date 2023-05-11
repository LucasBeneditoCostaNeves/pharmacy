import React from "react"
import { Route, Routes } from "react-router-dom"
import { PageLogin } from "../pages/login/index.jsx"
import { PageProfile } from "../pages/profile/index.jsx"
import { PageRegister } from "../pages/register/index.jsx"

export const RoutersPage = () => {
    return(
        <Routes>
            <Route path="/" element={<PageProfile/>}/> 
            <Route path="/login" element={<PageLogin/>}/>
            <Route path="/register" element={<PageRegister/>}/>
        </Routes>
    )
}