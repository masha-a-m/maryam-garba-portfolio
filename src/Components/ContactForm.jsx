// src/components/ContactForm.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    businessName: '',
    location: '',
    startDate: null,
    projectType: '',
    collaborationDetails: '',
    problemDetails: '',
    referral: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      startDate: date,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'location', 'startDate', 'projectType', 'referral'];
    
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post('https://formspree.io/f/YOURENDPOINT',  formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Form submitted successfully!');
    } catch (err) {
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Let’s Bring Your Idea To Life</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Please provide your first name"
            className={`w-full mt-1 px-4 py-2 border rounded-md ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Please provide your last name"
            className={`w-full mt-1 px-4 py-2 border rounded-md ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Please provide your email address"
            className={`w-full mt-1 px-4 py-2 border rounded-md ${
              errors.email || !formData.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Website URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Website URL (if any)</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://" 
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Business Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Name (if different)</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder=""
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Location / Time Zone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location / Time Zone<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Geographically speaking..."
            className={`w-full mt-1 px-4 py-2 border rounded-md ${
              errors.location ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ideal Project Start Date<span className="text-red-500">*</span>
          </label>
          <div className="relative mt-1">
            <DatePicker
              selected={formData.startDate}
              onChange={handleDateChange}
              placeholderText="Select date"
              className={`w-full px-4 py-2 border rounded-md cursor-pointer ${
                errors.startDate ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <span className="absolute right-3 top-2.5 text-gray-400">📅</span>
          </div>
          {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>}
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Project Type<span className="text-red-500">*</span>
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full mt-1 px-4 py-2 border rounded-md cursor-pointer ${
              errors.projectType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select</option>
            <option value="Wordpress Design">Wordpress Design</option>
            <option value="Ghostwriting Services">Ghostwriting Services</option>
            <option value="Web Development">Web Development</option>
            <option value="Author Services">Author Services</option>
          </select>
          {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
        </div>

        {/* Collaboration Details */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            What project would you like to collaborate on?
          </label>
          <textarea
            name="collaborationDetails"
            value={formData.collaborationDetails}
            onChange={handleChange}
            rows="4"
            placeholder=""
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Problem Details */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Tell me a little more... Is there a problem you would like to solve and what would a successful end result be?
          </label>
          <textarea
            name="problemDetails"
            value={formData.problemDetails}
            onChange={handleChange}
            rows="6"
            placeholder=""
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Referral */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Who can I thank for sending you my way?<span className="text-red-500">*</span>
          </label>
          <textarea
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            rows="2"
            placeholder=""
            className={`w-full mt-1 px-4 py-2 border rounded-md ${
              errors.referral ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.referral && <p className="text-red-500 text-xs mt-1">{errors.referral}</p>}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end mt-6">
          <button
            type="submit"
            className="bg-[#b18165] hover:bg-[#a16d50] text-white px-6 py-3 rounded-md transition duration-300"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;