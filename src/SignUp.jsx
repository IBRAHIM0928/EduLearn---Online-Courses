import React from 'react';
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import signUpBg from './assets/Sign Up.jpg';
function SignUp() {
  
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const goldColor = "#f39c12";
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; 
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };
  
  
    handleScroll(); 
   
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



const inputStyle = {
    width: "100%",
    padding: "15px",
    borderRadius: "15px",
    border: "1.5px solid rgba(243, 156, 18, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: "white",
    outline: "none",
    marginTop: "10px"
  };


const labelStyle = {
    color: "white",
    display: "block",
    marginLeft: "15px",
    fontWeight: "500",
    fontSize: "0.9rem"
  };


  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", fontFamily: 'Arial, sans-serif' }}>
      
      {/* Navbar */}
     <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", position: "Fixed", top: 0, width: "100%", zIndex: 100 }}>
       
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
            }}>
            <div style={{ backgroundColor: goldColor, width: "10px", height: "22px", transform: "skewX(-20deg)", marginRight: "10px" }}></div>
            Edu<span style={{ color: goldColor }}>Learn</span>
          </Link>

        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
    <Link to="/" style={{ 
      color: "white", 
      textDecoration: "none", 
      fontWeight: "bold", 
      border: `1.5px solid ${goldColor}`, 
      padding: "8px 20px", 
      borderRadius: "10px",
      transition: "0.3s"
    }}>Home</Link>

    <Link to="/login" style={{ 
      backgroundColor: goldColor, 
      color: "white", 
      padding: "9px 25px", 
      borderRadius: "10px", 
      textDecoration: "none", 
      fontWeight: "bold" 
    }}>Log In</Link>
       </div>
      </nav>

      <main style={{ 
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.69), rgba(0, 0, 0, 0.41)), url(${signUpBg})`,
        backgroundSize: "cover", backgroundPosition: "center", padding: "100px 0 50px"
      }}>
        
       
        <div className="reveal" style={{ 
          width: "90%", maxWidth: "500px", 
          background: "rgba(30, 30, 30, 0.53)", backdropFilter: "blur(1px)", 
          borderRadius: "35px", border: "2px solid #f39c12", 
          boxShadow: "0 0 40px rgba(243, 157, 18, 0.06)", padding: "40px", textAlign: "center"
        }}>
          <h1 style={{ color: "white", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "5px" }}>Create Account</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "30px", fontSize: "0.9rem" }}>Join our community and start learning</p>

          <form onSubmit={(e) => { e.preventDefault(); navigate("/login"); }}>
            
          
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label style={labelStyle}>Full Name</label>
              <input type="text" placeholder="John Doe" style={inputStyle} />
            </div>

            
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label style={labelStyle}>Email Address</label>
              <input type="email" placeholder="name@example.com" style={inputStyle} />
            </div>
            
          
            <div style={{ marginBottom: "30px", textAlign: "left" }}>
              <label style={labelStyle}>Password</label>
              <input type="password" placeholder="••••••••••••••••" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "30px", textAlign: "left" }}>
              <label style={labelStyle}>Confirm Password</label>
              <input type="password" placeholder="••••••••••••••••" style={inputStyle} />
            </div>

            <button type="submit" style={{ 
              backgroundColor: "#f39c12", color: "white", border: "none", 
              width: "100%", padding: "15px", borderRadius: "12px", fontSize: "1.1rem", fontWeight: "bold", cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseEnter={(e) => e.target.style.filter = "brightness(1.1)"}
            onMouseLeave={(e) => e.target.style.filter = "brightness(1)"}
            >
              Sign Up
            </button>
          </form>

          <p style={{ marginTop: "25px", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
            Already have an account? <Link to="/login" style={{ color: "#f39c12", fontWeight: "bold", textDecoration: "none" }}>Log In</Link>
          </p>
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
        
        {/* النص جهة اليسار */}
        <div style={{ color: "#bbb", fontSize: "16px" }}>
          © 2026 <span style={{ color: goldColor, fontWeight: "bold" }}>EduLearn</span> Global Education. All rights reserved.
        </div>

        {/* الأيقونات و Follow Us جهة اليمين */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ 
            color: goldColor, 
            fontWeight: "900", // خط عريض جداً
            fontSize: "18px",  // حجم كبير وواضح
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

export default SignUp;