import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, MessageCircle, Star, ArrowRight } from 'lucide-react';
import image from '../../assets/image1.png'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

 


  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
       

        <div className="flex flex-col lg:flex-row gap-12 ">
          {/* Left Content */}
          <div className="lg:w-1/2">
               <div>
               <h2 className=" text-[20px] md:text-5xl font-extrabold mb-4">
                How Can We Help You Today?
              </h2>
              <p className=" text-[12px]  md:text-xl  leading-relaxed">
                Whether you're starting a new project, need technical support, or just want to explore possibilities, 
                we're excited to hear from you. Our team is ready to provide personalized solutions.
              </p>
               </div>
              <div>
              <img 
                src={image} 
                alt="Team collaboration" 
                className="relative rounded-2xl shadow-lg w-full object-cover"
              />
              </div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 transform hover:shadow-2xl transition-all duration-300 sticky top-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <span className="text-green-800 font-semibold block">Message sent successfully!</span>
                    <span className="text-green-600 text-sm">We'll get back to you soon.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full text-black font-light px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-gray-50/50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full  text-black font-light  px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-gray-50/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full  text-black font-light  px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-gray-50/50"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full  text-black font-light  px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-gray-50/50"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full  text-black font-light  px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-gray-50/50 resize-none"
                    placeholder="Tell us more about your project, goals, and timeline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(90deg, #0040ff, #0078ff)",
                  }}
                  className="w-full text-white font-semibold py-4 px-6 rounded-xl  flex items-center justify-center gap-3  "
                >
                  <div className="absolute inset-0  transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Send className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  We respect your privacy. Your information is secure with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form