import React, { useState } from 'react';
import './ContactModal.css'; // We'll create this next

const ContactModal = ({ onClose }) => {
  const [errors, setErrors] = useState({});
  
  const validateField = (name, value) => {
    return !value.trim() ? "This field is required" : "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newErrors = {};

    e.target.querySelectorAll(".validate-required").forEach((field) => {
      newErrors[field.name] = validateField(field.name, field.value);
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (hasErrors) return;

    fetch(e.target.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        alert("Thank you! Your message has been sent.");
        e.target.reset();
        onClose();
      })
      .catch((err) => {
        alert("Oops! Something went wrong.");
        console.error(err);
      });
  };

  return (
    <div className="modal-overlay show">
      <div className="modal-bg">
        <div className="modal-content scroll-style">
          <span className="close-modal-btn" onClick={onClose}>
            &times;
          </span>

          <h2 className="modal-title">Let’s Start Your Project</h2>

          <form action="https://formspree.io/f/xjkrrgnn"  method="POST" onSubmit={handleSubmit}>
            {/* Copy your entire form here */}
            {/* Example below — paste full form structure from your HTML */}
            <div className="form-group name">
              <div>
                <label>First Name<span className="red">*</span></label>
                <input type="text" name="First Name" className={`validate-required ${errors["First Name"] ? "input-error" : ""}`} placeholder="Please provide a first name" onChange={handleChange} />
                <small className={`error-message ${errors["First Name"] ? "" : "hidden"}`}>This field is required</small>
              </div>
              <div>
                <label>Last Name<span className="red">*</span></label>
                <input type="text" name="Last Name" className={`validate-required ${errors["Last Name"] ? "input-error" : ""}`} placeholder="Please provide a last name" onChange={handleChange} />
                <small className={`error-message ${errors["Last Name"] ? "" : "hidden"}`}>This field is required</small>
              </div>
            </div>

            {/* Add all other fields similarly */}
            
            <div className="submit-container">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;