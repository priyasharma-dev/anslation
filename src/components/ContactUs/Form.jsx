import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Input = ({ label, ...props }) => (
  <div className="space-y-1">
    <label className="text-sm text-[#9CA3AF]">{label}</label>
    <input
      {...props}
      className=" 
      w-full
        h-12
        px-4
        rounded-lg
        text-[15px]
        leading-none
        text-white
        bg-[#0C1726]
        border border-[#475569]
        outline-none
        focus:border-[#1E6DDD]
        transition"
    />
  </div>
);

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="flex justify-center  px-4 sm:px-6 py-12 md:py-16">
      <div
        className="
          w-full max-w-5xl
          rounded-2xl border p-5 sm:p-8 md:p-10
        "
        style={{
          background:
            'linear-gradient(144.14deg, #0E172A -2.18%, rgba(30, 50, 90, 0.14) 106.45%)',
          borderColor: '#334156',
          backdropFilter: 'blur(4.2px)',
        }}
      >
        <h2 className="text-white text-lg md:text-xl font-medium mb-5 md:mb-6">
          Send us a message
        </h2>
         {submitted && (
          <div className="mb-5 p-3 rounded-lg bg-green-900/20 border border-green-600/40 text-green-400 flex items-center gap-2">
            <CheckCircle size={18} />
            Message sent successfully
          </div>
        )}
        

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                  {/* LEFT */}
                  <div className="space-y-5 md:space-y-6">
                    <Input
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <Input
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  {/* RIGHT */}
                  <div className="space-y-2">
                    <label className="text-sm text-[#9CA3AF]">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full  min-h-[180px] md:min-h-[15rem] px-4 py-3 rounded-lg text-white bg-[#0C1726] border border-[#475569] resize-none outline-none
                   focus:border-[#1E6DDD]
                    transition"
                    />
                  </div>
              

                {/* BUTTON */}
                 <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="
               w-full md:w-[240px]
                mt-4 md:mt-6 py-3 rounded-lg
                text-white font-medium
                transition hover:opacity-90
              "
              style={{
                background:
                  'linear-gradient(90deg, #1E6DDD 0%, #0C8ABB 100%)',
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
          
  );
}

export default Form;
