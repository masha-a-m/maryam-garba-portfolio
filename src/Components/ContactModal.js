import React, { useState, useEffect, useRef } from "react";
import "./ContactModal.css";

const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const formRef = useRef(null);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && e.target === modalRef.current) {
        setShowModal(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors
    const errorMessages = document.querySelectorAll(".error-message");
    const inputErrors = document.querySelectorAll(".input-error");

    errorMessages.forEach((el) => el.classList.add("hidden"));
    inputErrors.forEach((el) => el.classList.remove("input-error"));

    const requiredFields = document.querySelectorAll(".validate-required");

    requiredFields.forEach((field) => {
      const parent = field.parentElement;
      const errorMessage = parent ? parent.querySelector(".error-message") : null;

      let isEmpty = false;

      if (field.tagName === "SELECT") {
        isEmpty = field.value === "" || field.value === null;
      } else {
        isEmpty = !field.value.trim();
      }

      if (isEmpty) {
        if (errorMessage) errorMessage.classList.remove("hidden");
        field.classList.add("input-error");
        isValid = false;
      }
    });

    // Submit if valid
    if (isValid && formRef.current) {
      formRef.current.submit(); // Native form submit
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button className="open-modal-btn" onClick={() => setShowModal(true)}>
        Let’s Work Together
      </button>

      {/* Overlay Modal */}
      {showModal && (
        <div id="overlayModal" ref={modalRef} className="modal-overlay show">
          <div className="modal-bg">
            <div className="modal-content scroll-style">
              {/* Close Button */}
              <span
                id="closeModalBtn"
                className="close-modal-btn"
                onClick={() => setShowModal(false)}
              >
                &times;
              </span>

              {/* Title */}
              <h2 className="modal-title">Let’s Start Your Project</h2>

              {/* Form */}
              <form
                action="https://formspree.io/f/xjkrrgnn" 
                method="POST"
                onSubmit={handleFormSubmit}
                ref={formRef}
              >
                {/* Name Row */}
                <div className="form-group name">
                  {/* First Name */}
                  <div>
                    <label>
                      First Name<span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name="First Name"
                      className="validate-required"
                      placeholder="Please provide a first name"
                    />
                    <small className="error-message hidden">
                      This field is required
                    </small>
                  </div>
                  {/* Last Name */}
                  <div>
                    <label>
                      Last Name<span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name="Last Name"
                      className="validate-required"
                      placeholder="Please provide a last name"
                    />
                    <small className="error-message hidden">
                      This field is required
                    </small>
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
                      className="validate-required"
                      placeholder="Please provide your email address"
                    />
                    <small className="error-message hidden">
                      This field is required
                    </small>
                  </div>
                  <div>
                    <label>Website URL (if applicable)</label>
                    <input
                      type="url"
                      name="Website URL"
                      placeholder="https://example.com" 
                    />
                  </div>
                </div>

                {/* Business Name & Time Zone */}
                <div className="form-group business">
                  <div>
                    <label>Business Name (if different)</label>
                    <input type="text" name="Business Name" />
                  </div>
                  <div>
                    <label>
                      Location / Time Zone<span className="red">*</span>
                    </label>
                    <input
                      type="text"
                      name="Time Zone"
                      placeholder="e.g. Los Angeles, PST"
                      className="validate-required"
                    />
                    <small className="error-message hidden">
                      This field is required
                    </small>
                  </div>
                </div>

                {/* Project Date & Type */}
                <div className="form-group calender">
                  <div className="calendar-icon">
                    <label>
                      What is your project start date?
                      <span className="red">*</span>
                    </label>
                    <input
                      type="date"
                      name="Start Date"
                      className="validate-required"
                    />
                    <i className="fas fa-calendar"></i>
                    <small className="error-message hidden">
                      This field is required
                    </small>
                  </div>
                  <div className="project-type">
                    <label>
                      Project Type<span className="red">*</span>
                    </label>
                    <select name="Project Type" className="validate-required">
                      <option value="">Select</option>
                      <option value="Wordpress Design">Wordpress Design</option>
                      <option value="Ghostwriting Services">
                        Ghostwriting Services
                      </option>
                      <option value="Website Design">Website Design</option>
                      <option value="Author Services">Author Services</option>
                      <option value="Other">Other</option>
                    </select>
                    <small className="error-message hidden">
                      This field is required
                    </small>
                  </div>
                </div>

                {/* Collaboration Description */}
                <div className="form-field">
                  <label>
                    What project would you like to collaborate on?
                  </label>
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
                    Who can I thank for sending you my way?
                    <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    name="Referral"
                    className="validate-required"
                  />
                  <small className="error-message hidden">
                    This field is required
                  </small>
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
      )}
    </>
  );
};

export default ContactModal;