import React, { useState } from 'react';
import aboutImg from './assets/profile img.webp';

const About = () => {
  // Contact form state and handlers
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch("https://formspree.io/f/xjkrrgnn", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000); // Reset after 5 seconds
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
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
        you can find me reading, writing or learning new tech skills!<br/>
        <br/>
        <br/><br/>
      </p>
    
      {/* Hero Section */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-dancing-script text-[#b18165] text-center mb-6">Web Development Services</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-10">
          I create fast, responsive, and accessible websites using modern technologies like HTML, CSS, JavaScript, React, for frontend, MySQL for database
          and Firebase, Supabase for authentication.
        </p>

        <h2 className="text-2xl font-semibold border-l-4 border-[#e74c3c] pl-4 mb-4 mt-20">How I Build Your Website</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-2xl mx-auto">
          <li><strong>Consultation:</strong> We start with a call to understand your goals and audience.</li>
          <li><strong>Frontend Development:</strong>Built modern technologies including HTML5, CSS3, JavaScript (ES6+), and React.js for interactive user experiences.</li>
          <li><strong>Backend Integration:</strong>Implement authentication, database systems, and APIs using Firebase, Supabase, or MySQL for functionality.</li>
          <li><strong>Handover:</strong> You get full access, documentation, and optional training to manage your site confidently.</li>
        </ul>
      </section>

          {/* Services & Pricing */}
          <section class="px-8 pb-16 max-w-5xl mx-auto py-16">
          <h2 class="text-2xl font-semibold border-l-4 border-[#e74c3c] pl-10 mb-8 ml-24">Pricing & Packages</h2>


          {/* New Ultra-Basic Tier Row */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* Landing Page */}
            <div className="bg-white p-6 rounded shadow flex-1">
              <h3 className="text-xl font-bold text-[#b18165] mb-2">Single Landing Page</h3>
              <p className="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $50</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  1 fully responsive page (Home/Landing)
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Basic contact form
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Mobile-optimized design
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  One round of minor revisions
                </li>
              </ul>
              <p className="mb-4 text-sm">Ideal for quick campaigns or simple online presence.</p>
              <a href="#modalBtn" className="inline-block bg-[#b18165] text-white px-4 py-2 rounded hover:bg-[#a16d50] transition">Get My Landing Page</a>
            </div>

            {/* Brochure Site */}
            <div className="bg-white p-6 rounded shadow flex-1">
              <h3 className="text-xl font-bold text-[#b18165] mb-2">Brochure Website</h3>
              <p className="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $80</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  3 essential pages (Home, About, Contact)
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Responsive design
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Basic SEO setup
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Contact form with email notifications
                </li>
              </ul>
              <p className="mb-4 text-sm">Perfect for local businesses needing simple online presence.</p>
              <a href="#modalBtn" className="inline-block bg-[#b18165] text-white px-4 py-2 rounded hover:bg-[#a16d50] transition">Build My Brochure Site</a>
            </div>
          </div>


          {/* Pricing Boxes - Flex Container */}
          <div class="flex flex-col md:flex-row gap-8 mb-16">
            {/* Starter Site Package */}
            <div class="bg-white p-6 rounded shadow flex-1">
              <h3 class="text-xl font-bold text-[#b18165] mb-2">Starter Site Package</h3>
              <p class="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $100</p>
              <ul class="space-y-2 mb-4">
                <li class="flex items-start gap-2">
                  <i class="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Up to 4 pages (Home, About, Products/Services, Contact)
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
              <p class="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $150</p>
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



          {/* Existing Business + Ecommerce Row */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* Small Business Website (Existing) */}
            <div className="bg-white p-6 rounded shadow flex-1">
              <h3 className="text-xl font-bold text-[#b18165] mb-2">Small Business Website</h3>
              <p className="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $180</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Up to 6 pages (Home, About, Services, Portfolio, Blog, Contact)
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  SEO-friendly structure
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Integration with contact form
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Three rounds of revisions
                </li>
              </ul>
              <p className="mb-4 text-sm">For small businesses, coaches, or service providers looking to build credibility and visibility online.</p>
              <a href="#modalBtn" className="inline-block bg-[#b18165] text-white px-4 py-2 rounded hover:bg-[#a16d50] transition">Get Started</a>
            </div>

            {/* E-commerce (Existing) */}
            <div className="bg-white p-6 rounded shadow flex-1">
              <h3 className="text-xl font-bold text-[#b18165] mb-2">E-commerce Ready</h3>
              <p className="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $200</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  WooCommerce integration (if needed)
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Product catalog setup
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Payment gateway support
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Cart & checkout customization
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Three rounds of revisions
                </li>
              </ul>
              <p className="mb-4 text-sm">For businesses selling books, merch, or digital/physical products online.</p>
              <a href="#modalBtn" className="inline-block bg-[#b18165] text-white px-4 py-2 rounded hover:bg-[#a16d50] transition">Start My Online Shop</a>
            </div>
          </div>

          {/* New Mid-Tier Services Row */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* CMS Website */}
            <div className="bg-white p-6 rounded shadow flex-1">
              <h3 className="text-xl font-bold text-[#b18165] mb-2">CMS Website</h3>
              <p className="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $230</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  WordPress/Wix/Framer/Strapi setup
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Client-friendly content management
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Up to 5 customizable templates
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Basic training included
                </li>
              </ul>
              <p className="mb-4 text-sm">For clients who need to update content regularly.</p>
              <a href="#modalBtn" className="inline-block bg-[#b18165] text-white px-4 py-2 rounded hover:bg-[#a16d50] transition">Get My CMS Site</a>
            </div>

            {/* Website Redesign */}
            <div className="bg-white p-6 rounded shadow flex-1">
              <h3 className="text-xl font-bold text-[#b18165] mb-2">Website Redesign</h3>
              <p className="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $250</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Modernize existing website
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Mobile optimization
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Improved navigation
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check-circle mt-1 text-[#e74c3c]"></i>
                  Content reorganization
                </li>
              </ul>
              <p className="mb-4 text-sm">Breathe new life into your outdated website.</p>
              <a href="#modalBtn" className="inline-block bg-[#b18165] text-white px-4 py-2 rounded hover:bg-[#a16d50] transition">Redesign My Site</a>
            </div>
          </div>

          {/* Ongoing Maintenance */}
          <div class="bg-white p-6 rounded shadow mb-8">
            <h3 class="text-xl font-bold text-[#b18165] mb-2">Ongoing Maintenance Plan</h3>
            <p class="text-sm text-gray-600 mb-4"><strong>Starting at:</strong> $15/month</p>
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
              Logo Design – $10–$30
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-plus-circle mt-1 text-[#b18165]"></i>
              UI/UX Enhancements – $40+
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-plus-circle mt-1 text-[#b18165]"></i>
              SEO Optimization – $30
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-plus-circle mt-1 text-[#b18165]"></i>
              Custom Plugin/Functionality Development – $15/hour
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-plus-circle mt-1 text-[#b18165]"></i>
              Content Upload & Setup – $20
            </li>
          </ul>

          <p class="text-center text-sm text-gray-600 mb-8">
            All prices include revisions, support during development, and specific rounds of post-launch adjustments. Let me know your vision — we’ll tailor the package accordingly!
          </p>
      </section>

      {/* Contact Form Section - Added at the bottom */}
      <section className="w-full max-w-2xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          {/* Contact Info */}
          <p className="text-[#b18165] mb-4 text-xl font-medium">Let's bring your ideas to life</p>
          <div className="space-y-2 mb-8">
            <a href="mailto:whisperingcodes@gmail.com" className="block  hover:text-[#a16d50] transition">
              whisperingcodes@gmail.com
            </a>
            <a href="tel:+2348160528874" className="block hover:text-[#a16d50] transition">
              +234 81 605 288 74
            </a>
          </div>

          {/* Formspree Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left" id="modalBtn">
            <div>
              <label htmlFor="name" className="block text-[#b18165] mb-1">Name*</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#a16d50]"
                required
                disabled={status === 'sending'}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-[#b18165] mb-1">Email*</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#a16d50]"
                required
                disabled={status === 'sending'}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-[#b18165] mb-1">Message*</label>
              <textarea 
                id="message" 
                name="message"
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#a16d50]"
                required
                disabled={status === 'sending'}
              ></textarea>
            </div>
            
            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-3 bg-green-100 text-green-700 rounded">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-3 bg-red-100 text-red-700 rounded">
                Failed to send message. Please try again or email me directly.
              </div>
            )}
            
            <button 
              type="submit" 
              className="w-full bg-[#b18165] hover:bg-[#a16d50] text-white py-2 px-4 rounded transition disabled:opacity-50"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;