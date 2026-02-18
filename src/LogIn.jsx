import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useState , useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function LogIn() {
  const navigate = useNavigate();
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
  
  
    handleScroll(); // هذا السطر سيجعل العناصر تظهر فور فتح الصفحة دون انتظار السكرول
   
  
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

    <Link to="/signup" style={{ 
      backgroundColor: goldColor, 
      color: "white", 
      padding: "9px 25px", 
      borderRadius: "10px", 
      textDecoration: "none", 
      fontWeight: "bold" 
    }}>Sign Up</Link>
       </div>
      </nav>

      <main  style={{ 
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.24)), url('https://images.pexels.com/photos/33802176/pexels-photo-33802176.jpeg')", 
        backgroundSize: "cover", backgroundPosition: "center"
      }}>
        
        
        <div className="reveal" style={{ 
          width: "90%", maxWidth: "460px", 
          background: "rgba(30, 30, 30, 0.8)", backdropFilter: "blur(1px)", 
          borderRadius: "35px", border: "2px solid #f39c12", 
          boxShadow: "0 0 30px rgba(243, 156, 18, 0.2)", padding: "50px 40px", textAlign: "center"
        }}>
          <h1 style={{ color: "white", fontSize: "2.8rem", fontWeight: "bold", marginBottom: "5px" }}>Welcome Back</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "40px", fontSize: "0.9rem" }}>Log in to your account to continue</p>

          <form onSubmit={(e) => { e.preventDefault(); navigate("/"); }}>
            
            
            <div style={{ marginBottom: "25px", textAlign: "left" }}>
              <label style={{ color: "white", display: "block", marginBottom: "10px", marginLeft: "15px", fontWeight: "500" }}>Email Address</label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                style={{ 
                  width: "100%", padding: "15px", borderRadius: "15px", border: "1.5px solid rgba(243, 156, 18, 0.5)", 
                  backgroundColor: "rgba(255, 255, 255, 0.05)", color: "white", outline: "none"
                }} 
              />
            </div>
            
           
            <div style={{ marginBottom: "35px", textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", padding: "0 15px" }}>
                <label style={{ color: "white", fontWeight: "500" }}>Password</label>
                <span style={{ color: "#f39c12", fontSize: "0.85rem", cursor: "pointer" }}>Forgot?</span>
              </div>
              <input 
                type="password" 
                placeholder="••••••••••••••••" 
                style={{ 
                  width: "100%", padding: "15px", borderRadius: "15px", border: "1.5px solid rgba(243, 156, 18, 0.5)", 
                  backgroundColor: "rgba(255, 255, 255, 0.05)", color: "white", outline: "none"
                }} 
              />
            </div>

            <button type="submit" style={{ 
              backgroundColor: "#f39c12", color: "white", border: "none", 
              width: "100%", padding: "14px", borderRadius: "12px", fontSize: "1.1rem", fontWeight: "bold", cursor: "pointer"
            }}>Log In</button>
          </form>

          <p style={{ marginTop: "30px", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
            New here? <Link to="/signup" style={{ color: "#f39c12", fontWeight: "bold", cursor: "pointer" }}>Create Account</Link>
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

export default LogIn;