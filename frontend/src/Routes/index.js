import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import Books from '../Pages/Books';
import Records from '../Pages/Record';
import Students from '../Pages/Student';


const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/records" element={<Records />} />
                <Route path="/students" element={<Students />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;