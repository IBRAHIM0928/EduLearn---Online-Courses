import React from 'react';
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import contactBg from './assets/Contact.jpg'; 
function Contact() {

  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
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
    width: "100%", padding: "12px 15px", borderRadius: "8px", 
    border: "none", background: "#fff", color: "#333", outline: "none",
    fontSize: "14px", fontWeight: "500", marginTop: "5px"
  };

  const labelStyle = {
    fontSize: "14px", color: goldColor, fontWeight: "600", 
    display: "block", textAlign: "left"
  };

 
  

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", fontFamily: 'Arial, sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", position: "Fixed", top: 0, width: "100%", zIndex: 100 }}>
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
            }}>
            <div style={{ backgroundColor: goldColor, width: "10px", height: "22px", transform: "skewX(-20deg)", marginRight: "10px" }}></div>
            Edu<span style={{ color: goldColor }}>Learn</span>
          </Link>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", border: `1px solid ${goldColor}`, padding: "8px 20px", borderRadius: "20px" }}>Home</Link>
            <Link to="/courses" style={{ color: "white", textDecoration: "none", fontWeight: "bold", border: `1px solid ${goldColor}`, padding: "8px 20px", borderRadius: "20px" }}>Courses</Link>
            <Link to="/contact" style={{ backgroundColor: goldColor, color: "white", textDecoration: "none", fontWeight: "bold", padding: "8px 20px", borderRadius: "20px" }}>Contact</Link>
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
         
          <Link to="/signup" style={{ color: "white", textDecoration: "none", fontWeight: "bold", border: `1px solid ${goldColor}`, padding: "8px 20px", borderRadius: "20px" }}>Sign Up</Link>
         <Link to="/login" style={{ backgroundColor: goldColor, color: "white", textDecoration: "none", fontWeight: "bold", padding: "9px 25px", borderRadius: "20px" }}>Login</Link>
        </div>
      </nav>
      
      <main style={{
        padding: "120px 60px 60px", minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center",backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",
        backgroundImage: `linear-gradient(rgba(36, 34, 34, 0.8), rgba(10, 10, 10, 0.9)), url(${contactBg})` }}>
   
        <div style={{ display: "flex", gap: "40px", width: "100%", maxWidth: "1200px", flexWrap: "wrap" }}>
          
         
          <section className="reveal" style={{ flex: 1, minWidth: "350px", color: "white", textAlign: "left" }}>
            <span style={{ color: goldColor, fontSize: "12px", fontWeight: "bold", letterSpacing: "2px" }}>CONNECT WITH EXCELLENCE</span>
            <h1 style={{ fontSize: "3.5rem", fontWeight: "800", margin: "10px 0" }}>Let's Start a <br/><span style={{ color: goldColor }}>Conversation</span></h1>
            <p style={{ color: "#ccc", lineHeight: "1.6", marginBottom: "30px" }}>Have questions about our curriculum or enrollment process? Our advisors are here to provide the guidance you need to excel.</p>
            
            <div style={{ borderLeft: `3px solid ${goldColor}`, paddingLeft: "20px", fontStyle: "italic", color: "#bbb", marginBottom: "30px" }}>
              "Empowering learners worldwide through accessible, high-quality education and dedicated support."
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <p style={{ color: goldColor, fontWeight: "bold", margin: 0, fontSize: "12px" }}>EMAIL US</p>
                <span style={{ fontSize: "18px" }}>support@edulearn.com</span>
              </div>
              <div>
                <p style={{ color: goldColor, fontWeight: "bold", margin: 0, fontSize: "12px" }}>CALL CENTER</p>
                <span style={{ fontSize: "18px" }}>+1 (800) 567-8901</span>
              </div>
            </div>
          </section>

          
          <section className="reveal" style={{ flex: 1, minWidth: "400px", background: "rgba(255,255,255,0.05)", padding: "40px", borderRadius: "20px", border: `2px solid ${goldColor}`, backdropFilter: "blur(1px)" }}>
            <h2 style={{ color: "white", marginBottom: "25px", textAlign: "left" }}>Send us a Message</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input style={inputStyle} placeholder="John Doe" />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input style={inputStyle} placeholder="john@example.com" />
              </div>
              <div>
                <label style={labelStyle}>Subject</label>
                <input style={inputStyle} placeholder="How can we help?" />
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea style={{ ...inputStyle, resize: "none" }} rows="4" placeholder="Describe your inquiry..." />
              </div>
              <button 
                onMouseEnter={() => setIsButtonHovered(true)} 
                onMouseLeave={() => setIsButtonHovered(false)}
                style={{ 
                  backgroundColor: goldColor, color: "white", border: "none", padding: "16px", borderRadius: "50px", fontWeight: "bold", cursor: "pointer",
                  transition: "0.3s", transform: isButtonHovered ? "translateY(-3px)" : "none",
                  boxShadow: isButtonHovered ? `0 10px 20px rgba(243, 156, 18, 0.3)` : "none"
                }}>Send Message</button>
            </form>
          </section>
        </div>
      </main>

      

     <footer  style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "40px 80px", 
        background: "#000", 
        borderTop: "1px solid rgba(243, 156, 18, 0.3)",
        marginTop: "60px"
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

export default Contact;