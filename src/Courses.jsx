import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import pythonImg from "./assets/Python/python3.jpg"; 
import CyberSecurityImg from "./assets/Cyber Security/CyberSecurity2.jpg"; 
import ArtificialIntelligenceImg from "./assets/Artificial Intelligence/AI 2.jpg"; 
import CloudComputingImg from "./assets/Cloud Computing/AWS 4.jpg";
import FullStackImg from "./assets/Full Stack/Full-Stack 1.jpg";
import UIUXImg from "./assets/UI UX Design/UI UX 4.jpg";
import ReactImg from "./assets/React & JS/React 1.jpg"; 
import MobileAppImg from "./assets/Mobile Develop/Mobile App 3.jpg";

function Courses() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const goldColor = "#f39c12";

  
  const coursesData = [
    { id: 1, title: "Full-Stack Web Development", level: "Beginner",  rating: 4.9, students: "1.2k", img: FullStackImg },
    { id: 2, title: "Python for Data Science", level: "Intermediate",  rating: 4.8, students: "2.5k", img: pythonImg },
    { id: 3, title: "UI/UX Design Masterclass", level: "All Levels",  rating: 4.7, students: "900", img: UIUXImg },
    { id: 4, title: "Mobile App Development (Flutter)", level: "Advanced",  rating: 4.9, students: "850", img: MobileAppImg },
    { id: 5, title: "Cyber Security Fundamentals", level: "Beginner",  rating: 4.6, students: "1.1k", img: CyberSecurityImg },
    { id: 6, title: "Artificial Intelligence & ML", level: "Intermediate",  rating: 4.9, students: "3k", img: ArtificialIntelligenceImg },
    { id: 7, title: "React.js & Modern JS", level: "Advanced",  rating: 4.8, students: "1.8k", img: ReactImg },
    { id: 8, title: "Cloud Computing (AWS)", level: "Intermediate",  rating: 4.7, students: "700", img: CloudComputingImg },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add("active");
        }
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLevelColor = (level) => {
  switch (level) {
    case "Beginner": return "#2ecc71"; 
    case "Intermediate": return "#f1c40f"; 
    case "Advanced": return "#e74c3c"; 
    default: return "#3498db"; 
  }
};

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0b0b0b", fontFamily: 'Arial, sans-serif', color: "white" }}>
      
   {/* Navbar  */}
      <nav style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              padding: "20px 40px", 
              position: "Fixed", 
              top: 0, 
              width: "100%", 
              zIndex: 100 ,background: "rgba(0,0,0,0.8)", backdropFilter: "blur(1px)"
            }}>
              
              <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
               
                <Link 
                  to="/" 
                  onMouseEnter={() => setIsLogoHovered(true)}
                  onMouseLeave={() => setIsLogoHovered(false)}
                  style={{ 
                    textDecoration: "none", 
                    color: "white", 
                    fontSize: "24px", 
                    fontWeight: "bold", 
                    display: "flex", 
                    alignItems: "center",
                    transition: "0.3s ease",
                    transform: isLogoHovered ? "translateY(-5px)" : "translateY(0)",
                    filter: isLogoHovered 
            ? "drop-shadow(0 10px 15px rgba(243, 156, 18, 0.6))" 
            : "drop-shadow(0 0 0 rgba(0,0,0,0))",
                  }}
                >
                  <div style={{ backgroundColor: goldColor, width: "10px", height: "22px", transform: "skewX(-20deg)", marginRight: "10px" }}></div>
                  Edu<span style={{ color: goldColor }}>Learn</span>
                </Link>
      
                <div style={{ display: "flex", gap: "10px" }}>
                  <Link to="/" style={{  color: "white", textDecoration: "none", fontWeight: "bold", border: `1px solid ${goldColor}`, padding: "8px 20px", borderRadius: "20px" }}>Home</Link>
                  <Link to="/courses" style={{ backgroundColor: goldColor,color: "white", textDecoration: "none", fontWeight: "bold", border: `1px solid ${goldColor}`, padding: "8px 20px", borderRadius: "20px" }}>Courses</Link>
                  <Link to="/contact" style={{ color: "white", textDecoration: "none", fontWeight: "bold", border: `1px solid ${goldColor}`, padding: "8px 20px", borderRadius: "20px" }}>Contact</Link>
                </div>
              </div>
      
              
              <div style={{ display: "flex", gap: "20px", alignItems: "center", flex: 1, justifyContent: "flex-end", paddingLeft: "40px" }}>
                <div style={{ 
                  display: "flex", 
                  border: `2px solid ${goldColor}`, 
                  borderRadius: "25px", 
                  overflow: "hidden", 
                  background: "rgba(255,255,255,0.1)", 
                  backdropFilter: "blur(10px)",
                  width: "70%", 
                  maxWidth: "700px"
                }}>
                  <input type="text" placeholder="Search for courses..." style={{ border: "none", padding: "12px 20px", outline: "none", background: "transparent", color: "white", width: "100%" }} />
                  <button style={{ backgroundColor: goldColor, color: "white", border: "none", padding: "0 30px", cursor: "pointer", fontWeight: "bold" }}>Search</button>
                </div>
                
                <div style={{ display: "flex", gap: "10px" }}>
                  <Link to="/signup" style={{ color: "white", textDecoration: "none", fontWeight: "bold", border: `1px solid ${goldColor}`, padding: "8px 20px", borderRadius: "20px" }}>Sign Up</Link>
                  <Link to="/login" style={{ backgroundColor: goldColor, color: "white", textDecoration: "none", fontWeight: "bold", padding: "9px 25px", borderRadius: "20px" }}>Login</Link>
                </div>
              </div>
            </nav>

      {/* Main Content */}
      <main style={{ padding: "120px 40px 60px", }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }} className="reveal">
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}>Explore Our <span style={{ color: goldColor }}>Free</span> Courses</h1>
          <p style={{ color: "#bbb", fontSize: "1.1rem" }}>Level up your skills with industry-leading experts.</p>
        </div>

        <div className="container " style={{ marginTop: "70px", marginBottom: "60px" }}>
  <div className="row g-4"> 
    
    {coursesData.map((course) => (
  <div key={course.id} className="col-12 col-md-6 col-lg-4 reveal">
    <div 
      className="card h-100 border-0" 
      style={{ 
        background: "#121212", 
        borderRadius: "25px", 
        overflow: "hidden",
        border: `1px solid rgba(243, 156, 18, 0.2)`,
        color: "white",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)", 
        cursor: "pointer"
      }}
      
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-15px) scale(1.02)";
        e.currentTarget.style.boxShadow = `0 20px 40px rgba(243, 156, 18, 0.25), 0 0 100px rgba(243, 156, 18, 0.1)`;
        e.currentTarget.style.border = `1px solid ${goldColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.border = `1px solid rgba(243, 156, 18, 0.2)`;
      }}
    >
      <div style={{ position: 'relative' }}>
        <img 
          src={course.img} 
          className="card-img-top" 
          style={{ height: "240px", objectFit: "cover", opacity: "0.9" }} 
        />
        {/* طبقة تظليل فوق الصورة لدمجها مع الكارد */}
        {/* <div style={{ 
          position: 'absolute', bottom: 0, left: 0, right: 0, 
          height: '50%', background: 'linear-gradient(to top, #121212, transparent)' 
        }}></div> */}
      </div>

      <div className="card-body d-flex flex-column" style={{ padding: "25px" }}>
        <span style={{ 
          color: getLevelColor(course.level), 
          fontSize: "12px", fontWeight: "bold", letterSpacing: "1px" 
        }}>
          ● {course.level}
        </span>

        <h4 className="card-title fw-bold my-3" style={{ fontSize: "1.25rem" }}>{course.title}</h4>
        
        <div className="d-flex gap-3 mb-4 text-secondary small">
          <span>⭐ {course.rating}</span>
          <span>👥 {course.students}</span>
        </div>

        <div className="mt-auto d-flex justify-content-end align-items-center pt-3 border-top border-secondary">
          <Link to={`/CourseDetails/${course.id}`}>
          <button className="btn" style={{ 
            backgroundColor: goldColor, color: "black", 
            borderRadius: "12px", fontWeight: "bold", padding: "10px 20px"
          }}>
            Enroll Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
))}

  </div>
</div>
      </main>

     <footer  style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "40px 80px", 
        background: "#000", 
        borderTop: "1px solid rgba(243, 156, 18, 0.3)",
       
      }}>
        
   
        <div style={{ color: "#bbb", fontSize: "16px" }}>
          © 2026 <span style={{ color: goldColor, fontWeight: "bold" }}>EduLearn</span> Global Education. All rights reserved.
        </div>

        
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ 
            color: goldColor, 
            fontWeight: "900", 
            fontSize: "18px",  
            marginRight: "20px", 
            textTransform: "uppercase" 
          }}>
            Follow Us
          </span>

          <div style={{ display: "flex", gap: "10px" }}>
            {[faFacebook, faInstagram, faTwitter, faLinkedin].map((icon, index) => (
              <a 
                key={index}
                href="#" 
                style={{
                  color: goldColor,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "rgba(243, 156, 18, 0.05)",
                  border: "2px solid #f39c12",
                  transition: "all 0.3s ease",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = `0 5px 15px ${goldColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FontAwesomeIcon icon={icon} style={{ fontSize: "20px" }} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Courses;