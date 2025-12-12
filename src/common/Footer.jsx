import React from "react";

const Footer = () => {
  return (
    <footer className="border p-5 px-lg-5 px-3 text-center text-md-start mt-5" style={{ backgroundColor: "#f8f9fa" }}>
     
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
        <h2 className="mb-3 mb-md-0" style={{ color: "#000", fontWeight: "400" }}>
          Footer Title
        </h2>
       
      </div>

   
      <div className="row g-4">
       
        <div className="col-12 col-sm-6 col-md-3">
          <h5 className="fw-normal" style={{ color: "#000" }}>Quick Links</h5>
          <div className="d-flex flex-column gap-2">
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>Home</a>
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>About</a>
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>Packages</a>
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>Contact</a>
          </div>
        </div>

      
        <div className="col-12 col-sm-6 col-md-3">
          <h5 className="fw-normal" style={{ color: "#000" }}>Support</h5>
          <div className="d-flex flex-column gap-2">
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>Help Center</a>
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>FAQ</a>
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>Privacy Policy</a>
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>Terms</a>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <h5 className="fw-normal" style={{ color: "#000" }}>Contact</h5>
          <div className="d-flex flex-column gap-2">
            <span style={{ color: "#000" }}>📍 Address line here</span>
            <span style={{ color: "#000" }}>📞 +91 98765 43210</span>
            <span style={{ color: "#000" }}>📧 email@example.com</span>
          </div>
        </div>

      
        <div className="col-12 col-sm-6 col-md-3">
          <h5 className="fw-normal" style={{ color: "#000" }}>Follow Us</h5>
          <div className="d-flex flex-column gap-2">
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>Instagram</a>
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>Facebook</a>
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>Twitter</a>
            <a href="#" className="text-decoration-none" style={{ color: "#000" }}>YouTube</a>
          </div>
        </div>
      </div>

    
      <div className="text-center mt-4 pt-3 border-top">
        <p className="m-0 text-muted">© 2025 Travel Agency. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;