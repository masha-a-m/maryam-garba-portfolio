// src/pages/ContactPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">

      <ContactForm />
    </div>
  );
};

export default ContactPage;