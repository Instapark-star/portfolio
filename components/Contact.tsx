import React, { useState } from 'react';
import type { ProfileData } from '../types';

interface ContactProps {
  data: ProfileData['contact'];
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to a backend service.
    // For this demo, we'll just log it and reset the form.
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 text-center fade-in-section" aria-label="Contact">
      <h2 className="section-header mb-4">Contact</h2>
      <h3 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
        Let's Connect
      </h3>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an innovative team. Feel free to reach out.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-12 text-left space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="form-input"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className="form-input"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Your message..."
            className="form-input"
            aria-required="true"
          ></textarea>
        </div>
        <div className="text-center pt-2">
          <button
            type="submit"
            className="magnetic-button inline-block bg-white text-black px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>

      <p className="mt-8 text-gray-400">
        or call me at <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="font-medium text-gray-200 hover:text-green-500 transition-colors">{data.phone}</a>
      </p>
    </section>
  );
};