import React, { useState } from 'react';
import aboutImg from './assets/profile img.webp';
import ContactModal from "./ContactModal";


const About = () => {
  const [showModal, setShowModal] = useState(false);

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
  <div className="text-center mb-12 mt-28 text-[#b18165] text-xl underline hover:text-[#a16d50] transition">
  <button onClick={() => setShowModal(true)} className="open-modal-btn" id="modalBtn">
        Let’s Bring Your Idea To Life
      </button>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
  </div>
      </section>
      </div>
      );
      };

export default About;
