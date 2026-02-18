import React from 'react';
import { Link } from "react-router-dom";
import { useState ,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import homeBg from './assets/Home.jpg';
function Home() {
  const goldColor = "#f39c12";

  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  useEffect(() => {
      const handleScroll = () => {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach((element) => {
          const windowHeight = window.innerHeight;
          const elementTop = element.getBoundingClientRect().top;
         const elementVisible = 50; 

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  };

 
  handleScroll(); 
  setTimeout(handleScroll, 100);
    
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

 const socialIconStyle = {
    color: goldColor,
    fontSize: "20px",
    transition: "0.3s ease",
    cursor: "pointer",
    textDecoration: "none"
  };
   return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden", fontFamily: 'Arial, sans-serif' }}>
      
      
      <nav style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "20px 40px", 
        position: "Fixed", 
        top: 0, 
        width: "100%", 
        zIndex: 100 
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
            <Link to="/" style={{ backgroundColor: goldColor, color: "white", textDecoration: "none", fontWeight: "bold", border: `1px solid ${goldColor}`, padding: "8px 20px", borderRadius: "20px" }}>Home</Link>
            <Link to="/courses" style={{ color: "white", textDecoration: "none", fontWeight: "bold", border: `1px solid ${goldColor}`, padding: "8px 20px", borderRadius: "20px" }}>Courses</Link>
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
      <main style={{ 
        height: "100vh", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${homeBg})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        textAlign: "center",
        color: "white"
      }}>
        <section className="reveal">
        <h1 style={{ fontSize: "5rem", fontWeight: "bold", marginBottom: "20px" }}>Start Learning Today</h1>
        
         <p style={{ 
    fontSize: "1.7rem", 
    marginBottom: "40px", 
    maxWidth: "600px", 
    marginLeft: "auto", 
    marginRight: "auto", 
    textAlign: "center", 
    lineHeight: "1.6", 
    color: "#ffffff", 
    fontWeight: 450, 
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)", 
    letterSpacing: "0.5px" 
}}> 
    Join thousands of learners worldwide <br /> 
    and gain new skills with our expert-led courses.
</p>

   <Link to="/courses" style={{ textDecoration: "none" }}>
    <button 
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          style={{ 
            background: "linear-gradient(135deg, #f39c12, #e67e22)", 
            color: "white", 
            padding: "18px 60px", 
            border: "none", 
            borderRadius: "50px", 
            fontSize: "1.4rem", 
            fontWeight: "bold", 
            cursor: "pointer",
            transition: "all 0.4s ease",
            transform: isButtonHovered ? "translateY(-10px) scale(1.05)" : "translateY(0)", 
            boxShadow: isButtonHovered ? "0 15px 30px rgba(243, 156, 18, 0.5)" : "0 5px 15px rgba(0,0,0,0.3)",
          }}
        >
          Explore Courses
        </button>
    </Link>
        </section>
      </main>
       <footer style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "40px 60px", 
        background: "linear-gradient(to bottom, #0a0a0a, #000000)", 
        borderTop: `2px solid ${goldColor}` 
      }}>
        <div style={{ color: "#888", fontSize: "18px" }}>
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
                  ...socialIconStyle,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "rgba(243, 156, 18, 0.05)",
                  border: "2px solid #f39c12"
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
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}



export default Home;