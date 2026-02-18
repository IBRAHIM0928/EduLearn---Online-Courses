import React from 'react';
import { useParams,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const pythonImagesObj = import.meta.glob('./assets/Python/*.jpg', { eager: true });
const pythonImages = Object.values(pythonImagesObj).map((mod) => mod.default);

const cyberSecurityImagesObj = import.meta.glob('./assets/Cyber Security/*.jpg', { eager: true });
const cyberSecurityImages = Object.values(cyberSecurityImagesObj).map((mod) => mod.default);

const artificialIntelligenceImagesObj = import.meta.glob('./assets/Artificial Intelligence/*.jpg', { eager: true });
const artificialIntelligenceImages = Object.values(artificialIntelligenceImagesObj).map((mod) => mod.default);

const cloudComputingImagesObj = import.meta.glob('./assets/Cloud Computing/*.jpg', { eager: true });
const cloudComputingImages = Object.values(cloudComputingImagesObj).map((mod) => mod.default);

const fullStackImagesObj = import.meta.glob('./assets/Full Stack/*.jpg', { eager: true });
const fullStackImages = Object.values(fullStackImagesObj).map((mod) => mod.default);

const uiuxImagesObj = import.meta.glob('./assets/UI UX Design/*.jpg', { eager: true });
const uiuxImages = Object.values(uiuxImagesObj).map((mod) => mod.default);

const mobileAppImagesObj = import.meta.glob('./assets/Mobile Develop/*.jpg', { eager: true });
const mobileAppImages = Object.values(mobileAppImagesObj).map((mod) => mod.default);


const ReactImagesObj = import.meta.glob('./assets/React & JS/*.jpg', { eager: true });
const reactImages = Object.values(ReactImagesObj).map((mod) => mod.default);
function CourseDetails() {
  const { id } = useParams(); 
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const goldColor = "#f39c12";
  const coursesData = [
      { id: 1, title: "Full-Stack Web Development", level: "Beginner",  rating: 4.9, students: "1.2k", images: fullStackImages },
      { id: 2, title: "Python for Data Science", level: "Intermediate",  rating: 4.8, students: "2.5k", images: pythonImages },
      { id: 3, title: "UI/UX Design Masterclass", level: "All Levels",  rating: 4.7, students: "900", images: uiuxImages },
      { id: 4, title: "Mobile App Development (Flutter)", level: "Advanced",  rating: 4.9, students: "850", images: mobileAppImages },
      { id: 5, title: "Cyber Security Fundamentals", level: "Beginner",  rating: 4.6, students: "1.1k", images: cyberSecurityImages },
      { id: 6, title: "Artificial Intelligence & ML", level: "Intermediate",  rating: 4.9, students: "3k", images: artificialIntelligenceImages },
      { id: 7, title: "React.js & Modern JS", level: "Advanced",  rating: 4.8, students: "1.8k", images: reactImages },
      { id: 8, title: "Cloud Computing (AWS)", level: "Intermediate",  rating: 4.7, students: "700", images: cloudComputingImages },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

const course = coursesData.find((c) => c.id === parseInt(id));


useEffect(() => {
  
    if (course && course.images && course.images.length > 0) {
        
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % course.images.length
            );
        }, 3000);  

        
        return () => clearInterval(interval);
    }
}, [course]);

  if (!course) {
    return <div style={{color: 'white', padding: '100px'}}>Course Not Found!</div>;
  }
  
  return (
    <>
    <div style={{ 
  background: "linear-gradient(180deg, #000000 0%, #1a1a1a 100%)",
  minHeight: "100vh", 
  color: "white", 
  padding: "120px 40px" 
}}>
    <nav style={{ 
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center", 
  padding: "15px 60px", 
  position: "fixed", 
  top: 0, 
  width: "100%", 
  zIndex: 1000,
  background: "rgba(10, 10, 10, 0.85)",
  backdropFilter: "blur(15px)",
  WebkitBackdropFilter: "blur(15px)", 
  borderBottom: "1px solid rgba(243, 156, 18, 0.15)",
}}>
  

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

  
  <div style={{ display: "flex", gap: "35px" }}>
    <Link to="/" style={{ color: "rgba(255,255,255,0.8)",padding: "8px 20px", 
      borderRadius: "10px",
      fontSize: "16px",
      fontWeight: "bold", borderRadius: "10px", border: "1px solid #5e3c05", textDecoration: "none", fontSize: "15px", fontWeight: "500" }}>Home</Link>
    
    <Link to="/courses" style={{ color: "rgba(255,255,255,0.8)",padding: "8px 20px", 
      borderRadius: "10px",
      fontSize: "16px",
      fontWeight: "bold", borderRadius: "10px", border: "0.5px solid #5e3c05", textDecoration: "none", fontSize: "15px", fontWeight: "500" }}> Courses</Link>
  </div>

 
  <div>
    <Link to="/contact" style={{ 
      border: "1px solid #f39c12", 
      color: "#f39c12", 
      textDecoration: "none", 
      padding: "8px 20px", 
      borderRadius: "10px",
      fontSize: "17px",
      fontWeight: "bold",
      transition: "0.3s"
    }}>
        Support
    </Link>
  </div>

</nav>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-8">
            <h6 style={{ 
    color: "#f39c12", 
    textTransform: "uppercase", 
    letterSpacing: "2px", 
    fontWeight: "bold",
    marginBottom: "15px" 
  }}>
    🚀<span style={{ color: "#6cf312a6", fontWeight: "bolder" }}>Mission </span>:<span style={{ color: "#f31212a6", fontWeight: "bolder" }}> Professional Mastery </span>
  </h6>
            <h1 style={{ color: "#f39c12", fontWeight: "bold" }}>Advance Your Career in</h1>
            <h4 className="text-gold" style={{ fontWeight: "bold" }}> <strong>  {course.title}</strong> </h4>
            
            <div className="mt-5">
              <h3 style={{ color: "#f39c12"}} className="mb-4">Course Content</h3>
              
              {[1, 2, 3, 4].map((lesson) => (
                <div key={lesson} style={{ 
                  background: "linear-gradient(to bottom, #1a1a1a 0%, #42381b 100%)", 
                  padding: "20px", 
                  borderRadius: "15px", 
                  marginBottom: "10px",
                  borderLeft: `4px solid #f39c12` ,
                  fontWeight: "bold" ,
                  
                }}>
                   <span style={{ color: "#6cf312a6", fontWeight: "bolder" }}>Lesson  </span><span style={{ color: "#f31212", fontWeight: "bolder"}}>{lesson}</span> : Introduction to the Topic
                </div>
              ))}
            </div>
          </div>

          
       <div className="col-lg-4">
  <div style={{ 
    background: "#161616", 
    padding: "20px", 
    borderRadius: "25px", 
    border: "1px solid rgba(243, 156, 18, 0.15)", 
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
  }}>
    
    
    <div style={{ overflow: 'hidden', borderRadius: '20px', height: '400px' }}> 
        <img 
          src={course.images[currentIndex]} 
          alt={course.title}
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            transition: "all 0.8s ease-in-out",
          }} 
        />
    </div>

    
    <div className="d-flex justify-content-center gap-2 mt-3 mb-4">
      {course.images.map((_, index) => (
        <div key={index} style={{
          width: index === currentIndex ? "25px" : "8px", 
          height: "8px",
          borderRadius: "10px",
          background: index === currentIndex ? "#f39c12" : "#333",
          transition: "0.4s"
        }} />
      ))}
    </div>

    <h4 style={{ color: "white", marginBottom: "20px" }}>Ready to start?</h4>
    <button className="btn w-100 py-3" style={{ 
      backgroundColor: "#f39c12", 
      color: "black", 
      fontWeight: "bold", 
      borderRadius: "15px",
      fontSize: "1.1rem"
    }}>
      START NOW...!
    </button>
  </div>
</div>
        </div>
      </div>
</div>
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
    </>  
    
  );
}
export default CourseDetails;