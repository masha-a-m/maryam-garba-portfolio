import React, { useState } from 'react';

const ModalForm = ({ onClose }) => {
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    if (!value.trim()) {
      return "This field is required";
    }
    return "";
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
    const form = e.target;
    const formData = new FormData(form);
    const newErrors = {};

    // Validate all required fields
    form.querySelectorAll(".validate-required").forEach((field) => {
      const name = field.name;
      const value = field.value;
      newErrors[name] = validateField(name, value);
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (hasErrors) return;

    // Submit via fetch or use Formspree's default behavior
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        alert("Thank you! Your message has been sent.");
        form.reset();
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
          {/* Close Button */}
          <span className="close-modal-btn" onClick={onClose}>
            &times;
          </span>

          {/* Title */}
          <h2 className="modal-title">Let’s Start Your Project</h2>

          {/* Form */}
          <form action="https://formspree.io/f/xjkrrgnn"  method="POST" onSubmit={handleSubmit}>
            {/* Name Row */}
            <div className="form-group name">
              <div>
                <label>
                  First Name<span className="red">*</span>
                </label>
                <input
                  type="text"
                  name="First Name"
                  className={`validate-required ${errors["First Name"] ? "input-error" : ""}`}
                  placeholder="Please provide a first name"
                  onChange={handleChange}
                />
                {errors["First Name"] && (
                  <small className="error-message">{errors["First Name"]}</small>
                )}
              </div>
              <div>
                <label>
                  Last Name<span className="red">*</span>
                </label>
                <input
                  type="text"
                  name="Last Name"
                  className={`validate-required ${errors["Last Name"] ? "input-error" : ""}`}
                  placeholder="Please provide a last name"
                  onChange={handleChange}
                />
                {errors["Last Name"] && (
                  <small className="error-message">{errors["Last Name"]}</small>
                )}
              </div>
            </div>

            {/* Email & Website URL */}
            <div className="form-group mail">
              <div>
                <label>
                  Email<span className="red">*</span>
                </label>
                <input
                  type="email"
                  name="Email _replyto"
                  className={`validate-required ${errors["Email _replyto"] ? "input-error" : ""}`}
                  placeholder="Please provide your email address"
                  onChange={handleChange}
                />
                {errors["Email _replyto"] && (
                  <small className="error-message">{errors["Email _replyto"]}</small>
                )}
              </div>
              <div>
                <label>Website URL (if applicable)</label>
                <input
                  type="url"
                  name="Website URL"
                  placeholder="https://example.com" 
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Business Name & Time Zone */}
            <div className="form-group business">
              <div>
                <label>Business Name (if different)</label>
                <input
                  type="text"
                  name="Business Name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>
                  Location / Time Zone<span className="red">*</span>
                </label>
                <input
                  type="text"
                  name="Time Zone"
                  placeholder="e.g. Los Angeles, PST"
                  className={`validate-required ${errors["Time Zone"] ? "input-error" : ""}`}
                  onChange={handleChange}
                />
                {errors["Time Zone"] && (
                  <small className="error-message">{errors["Time Zone"]}</small>
                )}
              </div>
            </div>

            {/* Project Date & Type */}
            <div className="form-group calender">
              <div className="calendar-icon">
                <label>
                  What is your project start date?<span className="red">*</span>
                </label>
                <input
                  type="date"
                  name="Start Date"
                  className={`validate-required ${errors["Start Date"] ? "input-error" : ""}`}
                  onChange={handleChange}
                />
                <i className="fas fa-calendar"></i>
                {errors["Start Date"] && (
                  <small className="error-message">{errors["Start Date"]}</small>
                )}
              </div>
              <div className="project-type">
                <label>
                  Project Type<span className="red">*</span>
                </label>
                <select
                  name="Project Type"
                  className={`validate-required ${errors["Project Type"] ? "input-error" : ""}`}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Wordpress Design">Wordpress Design</option>
                  <option value="Ghostwriting Services">Ghostwriting Services</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Author Services">Author Services</option>
                  <option value="Other">Other</option>
                </select>
                {errors["Project Type"] && (
                  <small className="error-message">{errors["Project Type"]}</small>
                )}
              </div>
            </div>

            {/* Collaboration Description */}
            <div className="form-field">
              <label>What project would you like to collaborate on?</label>
              <textarea name="Collaboration Project" rows="3"></textarea>
            </div>

            {/* Tell Me More */}
            <div className="form-field">
              <label>
                Tell me a little more... Is there a problem you would like to solve, and what would a successful end result be?
              </label>
              <textarea name="Success End Result" rows="4"></textarea>
            </div>

            {/* Referral */}
            <div className="form-field">
              <label>
                Who can I thank for sending you my way?<span className="red">*</span>
              </label>
              <input
                type="text"
                name="Referral"
                className={`validate-required ${errors["Referral"] ? "input-error" : ""}`}
                onChange={handleChange}
              />
              {errors["Referral"] && (
                <small className="error-message">{errors["Referral"]}</small>
              )}
            </div>

            {/* Submit Button */}
            <div className="submit-container">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;