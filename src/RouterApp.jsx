import React from 'react';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import CourseDetails from "./CourseDetails";
import Contact from "./Contact";
import Home from "./Home";
import Courses from "./Courses";


function RouterApp() {
    return (
        <Router basename="/EduLearn---Online-Courses">   
            <Routes>
                <Route path="/" element={<Home />} />    
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/CourseDetails/:id" element={<CourseDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courses" element={<Courses />} />
            </Routes>

        </Router>
    );
}

export default RouterApp;