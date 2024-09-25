// components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.description) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', description: '' });
        setErrors({});
      }, 1000);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-slate-200 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-1.5 border rounded-md shadow-sm focus:outline-none focus:ring-500 focus:border-indigo-500 sm:text-xs ${
              errors.name ? 'border-red-400' : 'border-gray-300'
            }`}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-1.5 border rounded-md shadow-sm focus:outline-none focus:ring-500 focus:border-indigo-500 sm:text-xs ${
              errors.email ? 'border-red-400' : 'border-gray-300'
            }`}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className={`mt-1 block w-full px-3 py-1.5 border rounded-md shadow-sm focus:outline-none focus:ring-500 focus:border-indigo-500 sm:text-xs ${
              errors.description ? 'border-red-400' : 'border-gray-300'
            }`}
            placeholder="Your Message"
          />
          {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-700 text-white  rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          Send Message
        </button>
        {successMessage && (
          <div className="mt-4 p-3 bg-green-100 border border-green-300 text-green-800 rounded-md text-xs">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
