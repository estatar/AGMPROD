import React, { useState, useEffect } from 'react';
import { Globe2, BarChart3, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('top')}
              className="flex-shrink-0 font-bold text-xl text-blue-600 hover:text-blue-700 transition-colors"
            >
              AGMPROD
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-md p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('international-business')}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                International Business
              </button>
              <button
                onClick={() => scrollToSection('marketing-strategies')}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Marketing Strategies
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <button
              onClick={() => scrollToSection('international-business')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              International Business
            </button>
            <button
              onClick={() => scrollToSection('marketing-strategies')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              Marketing Strategies
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[60vh] pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Business background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">AGMPROD</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              International Business & Marketing Strategies
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Services Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* International Business */}
            <div id="international-business" className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 scroll-mt-20">
              <div className="flex items-center mb-6">
                <Globe2 className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Our International Business</h2>
              </div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                alt="International Business"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-600 leading-relaxed">
                At AGMPROD, we specialize in International Business and Marketing Strategies with a focus on global import and export solutions. Our expertise lies in connecting businesses across borders, streamlining logistics, and facilitating seamless trade operations worldwide.
              </p>
            </div>

            {/* Marketing Strategies */}
            <div id="marketing-strategies" className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 scroll-mt-20">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Our Marketing Strategies</h2>
              </div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Marketing Strategies"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-600 leading-relaxed">
                In addition to our trade services, we have an in-house team offering cutting-edge Multimedia and Visual Communication solutions. From branding to impactful digital campaigns, we help businesses tell their story & their products and reach global audiences effectively. With a commitment to innovation, efficiency, and excellence.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg italic">
              AGMPROD is your trusted partner in navigating international markets and achieving growth. Let's work together to make your business thrive on a global scale.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 py-20 px-4 md:px-8 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-600">contact@agmprod.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-600">123 Business Avenue, New York, NY 10001</span>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 px-4 text-center">
          <p>&copy; {new Date().getFullYear()} AGMPROD. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;