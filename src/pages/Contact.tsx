import React, { useState } from 'react';
import { Button } from '../components/Button';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="w-full max-w-lg p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        {submitted ? (
          <p className="text-center font-semibold text-green-600 dark:text-green-400">
            Thank you for your message!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
              Send
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
