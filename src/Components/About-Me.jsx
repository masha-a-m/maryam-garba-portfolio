import React, { useState, useEffect } from "react";
import "./ContactModal.css"; // Make sure this file exists and has modal styles
import { library } from "@fortawesome/fontawesome-svg-core";
import aboutImg from './assets/profile img.webp';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add icons to library
library.add(faCalendar);

const About = () => {
  const [showModal, setShowModal] = useState(false);

  // Lock background scroll
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  // Handle outside click
  const modalRef = React.useRef(null);
  
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

  // Handle ESC key close
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showModal]);

  // Form validation logic
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    const errorMessages = document.querySelectorAll(".error-message");
    const inputErrors = document.querySelectorAll(".input-error");

    errorMessages.forEach((el) => el.classList.add("hidden"));
    inputErrors.forEach((el) => el.classList.remove("input-error"));

    const requiredFields = document.querySelectorAll(".validate-required");

    requiredFields.forEach((field) => {
      const parent = field.parentElement;
      const errorMessage = parent?.querySelector(".error-message");

      let isEmpty = false;

      if (field.tagName === "SELECT") {
        isEmpty = !field.value || field.value === "";
      } else {
        isEmpty = !field.value.trim();
      }

      if (isEmpty) {
        if (errorMessage) errorMessage.classList.remove("hidden");
        field.classList.add("input-error");
        isValid = false;
      }
    });

    if (isValid) {
      e.target.submit(); // Submit via Formspree
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-8">
          {/* Image */}
          <img 
            src={aboutImg}
            alt="About Me" 
            className="rounded-full w-48 h-48 mb-8 object-cover mt-20" 
          />
    
          {/* About Me Text */}
          <h2 className="text-3xl text-[#b18165] font-dancing-script mb-4">About Me</h2>
          <p className="text-center text-lg max-w-2xl">
            Hi, I'm Maryam Garba, a passionate frontend developer based in Kaduna, Nigeria.
            I love designing and building clean, user-friendly interfaces, with a focus on
            modern technologies such as React, Tailwind, and more. When I'm not coding,
            you can find me reading or learning new tech skills!<br/>
            <br/>
            <br/><br/>
          </p>
        
          {/* Hero Section */}
          <section class="px-8 py-16 max-w-5xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-dancing-script text-[#b18165] text-center mb-6">Web Development Services</h1>
            <p class="text-lg text-center max-w-3xl mx-auto mb-10">
              I create fast, responsive, and accessible websites using modern technologies like HTML, CSS, JavaScript, React, for frontend,
              and PHP, Python (Django), and MySQL for backend functionality.
            </p>
    
            <h2 class="text-2xl font-semibold border-l-4 border-[#e74c3c] pl-4 mb-4">How I Build Your Website</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-700 max-w-2xl mx-auto">
              <li><strong>Consultation:</strong> We start with a call to understand your goals and audience.</li>
              <li><strong>Frontend Development:</strong> Built using HTML, CSS, JavaScript, and React for dynamic user experiences.</li>
              <li><strong>Backend Integration:</strong> Add login systems, contact forms, databases, or APIs using PHP, Django, or Python.</li>
              <li><strong>Handover:</strong> You get full access, documentation, and optional training to manage your site confidently.</li>
            </ul>
          </section>
    
          {/* Services & Pricing */}
          <section class="px-8 pb-16 max-w-5xl mx-auto">
            <h2 class="text-2xl font-semibold border-l-4 border-[#e74c3c] pl-4 mb-8">Pricing & Packages</h2>
          
            {/* Pricing Boxes - Flex Container */}
            <div class="flex flex-col md:flex-row gap-8 mb-16">
              {/* Starter Site Package */}
              <div class="bg-white p-6 rounded shadow flex-1">
                <h3 class="text-xl font-bold text-[#b18165] mb-2">Starter Site Package</h3>
                <p class="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $300</p>
                <ul class="space-y-2 mb-4">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Up to 3 pages (Home, About, Contact)
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Mobile-friendly layout
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Basic SEO setup
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    One round of revisions
                  </li>
                </ul>
                <p class="mb-4 text-sm">Perfect for beginners or personal sites.</p>
                <a href="#modalBtn" class="inline-block bg-[#b18165] text-white px-4 py-2 rounded hover:bg-[#a16d50] transition">Let’s Build My First Site</a>
              </div>
          
              {/* Portfolio / Blog */}
              <div class="bg-white p-6 rounded shadow flex-1">
                <h3 class="text-xl font-bold text-[#b18165] mb-2">Portfolio or Blog</h3>
                <p class="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $700</p>
                <ul class="space-y-2 mb-4">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Custom post types (e.g., Portfolio items, Testimonials)
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Responsive layout
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Integration with contact form
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Two rounds of revisions
                  </li>
                </ul>
                <p class="mb-4 text-sm">Ideal for creatives, developers, writers, or anyone who wants to showcase their work online.</p>
                <a href="#modalBtn" class="inline-block bg-[#b18165] text-white px-4 py-2 rounded hover:bg-[#a16d50] transition">Start With Basic</a>
              </div>
            </div>
          
            {/* Second Row */}
            <div class="flex flex-col md:flex-row gap-8 mb-16">
              {/* Small Business Website */}
              <div class="bg-white p-6 rounded shadow flex-1">
                <h3 class="text-xl font-bold text-[#b18165] mb-2">Small Business Website</h3>
                <p class="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $900</p>
                <ul class="space-y-2 mb-4">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Up to 6 pages (Home, About, Services, Portfolio, Blog, Contact)
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    SEO-friendly structure
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Integration with contact form
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Three rounds of revisions
                  </li>
                </ul>
                <p class="mb-4 text-sm">For small businesses, coaches, or service providers looking to build credibility and visibility online.</p>
                <a href="#modalBtn" class="inline-block bg-[#b18165] text-white px-4 py-2 rounded hover:bg-[#a16d50] transition">Get Started</a>
              </div>
          
              {/* E-commerce */}
              <div class="bg-white p-6 rounded shadow flex-1">
                <h3 class="text-xl font-bold text-[#b18165] mb-2">E-commerce Ready</h3>
                <p class="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $1,300</p>
                <ul class="space-y-2 mb-4">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    WooCommerce integration (if needed)
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Product catalog setup
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Payment gateway support
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Cart & checkout customization
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                    Three rounds of revisions
                  </li>
                </ul>
                <p class="mb-4 text-sm">For businesses selling books, merch, or digital products online.</p>
                <a href="#modalBtn" class="inline-block bg-[#b18165] text-white px-4 py-2 rounded hover:bg-[#a16d50] transition">Start My Online Shop</a>
              </div>
            </div>
          
            {/* Ongoing Maintenance */}
            <div class="bg-white p-6 rounded shadow mb-8">
              <h3 class="text-xl font-bold text-[#b18165] mb-2">Ongoing Maintenance Plan</h3>
              <p class="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $40/month</p>
              <ul class="space-y-2 mb-4">
                <li class="flex items-start gap-2">
                  <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Monthly updates (WordPress, plugins, themes)
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Security checks
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Content updates (up to 3 per month)
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Backup monitoring
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Minor bug fixes & performance tweaks
                </li>
              </ul>
              <p class="mb-4 text-sm">Keep your site fast, secure, and up-to-date without lifting a finger.</p>
              <a href="#modalBtn" class="inline-block bg-[#b18165] text-white px-4 py-2 rounded hover:bg-[#a16d50] transition">Keep My Site Running Smoothly</a>
            </div>
          
            {/* Add-ons */}
            <h3 class="text-lg font-semibold text-[#b18165] mb-4 mt-8">Optional Add-Ons</h3>
            <ul class="space-y-2 mb-10 text-sm">
              <li class="flex items-start gap-2">
                <i class="fas fa-plus-circle mt-1 text-[#b18165]"></i>
                Logo Design – $80–$120
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-plus-circle mt-1 text-[#b18165]"></i>
                UI/UX Enhancements – $100+
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-plus-circle mt-1 text-[#b18165]"></i>
                SEO Optimization – $90
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-plus-circle mt-1 text-[#b18165]"></i>
                Custom Plugin/Functionality Development – $75/hour
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-plus-circle mt-1 text-[#b18165]"></i>
                Content Upload & Setup – $50
              </li>
            </ul>
          
            <p class="text-center text-sm text-gray-600 mb-8">
              All prices include revisions, support during development, and specific rounds of post-launch adjustments. Let me know your vision — we’ll tailor the package accordingly!
            </p>

              {/* Call to Action */}
              <div className="text-center mb-12 mt-28 text-[#b18165] hover:text-[#a16d50] transition">
                <button
                  className="open-modal-btn"
                  onClick={() => setShowModal(true)}
                >
                  Let’s Bring Your Idea To Life
                </button>
              </div>
          </section>

        {/* Modal */}
        {showModal && (
          <div id="overlayModal" ref={modalRef} className="modal-overlay show">
            <div className="modal-bg">
              <div className="modal-content scroll-style">
                {/* Close Button */}
                <span
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
                >
                  {/* Name Row */}
                  <div className="form-group name">
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
                      <FontAwesomeIcon
                        icon="calendar"
                        className="fa-calendar"
                      />
                      <small className="error-message hidden">
                        This field is required
                      </small>
                    </div>
                    <div className="project-type">
                      <label>
                        Project Type<span className="red">*</span>
                      </label>
                      <select
                        name="Project Type"
                        className="validate-required"
                      >
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
      </div>

  );
};

export default About;