// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      className="min-h-screen bg-background flex flex-col items-center justify-center p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-bold text-heading mb-12">Contact Me</h2>

      <div className="bg-surface p-12 rounded-3xl shadow-2xl border border-white/20 max-w-3xl w-full space-y-6">
        {/* Email */}
        <p className="text-2xl">
          <strong>📧 Email:</strong>{' '}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bharathsenthil567@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl text-primary hover:underline"
          >
            bharathsenthil567@gmail.com
          </a>
        </p>

        {/* Phone */}
        <p className="text-2xl">
          <strong>📱 Phone:</strong>{' '}
          <a href="tel:+919994598497" className="text-xl text-primary hover:underline">
            +91 9994598497
          </a>
        </p>

        {/* WhatsApp */}
        <p className="text-2xl">
          <strong>💬 WhatsApp:</strong>{' '}
          <a 
            href="https://wa.me/919994598497" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl text-primary hover:underline flex items-center gap-3"
          >
            <span className="text-2xl">📲</span>
            Chat on WhatsApp
          </a>
        </p>

        {/* Address */}
        <p className="text-2xl">
          <strong>🏠 Address:</strong>{' '}
          <span className="text-xl">19, Ramaswamy St, Peddur PO, Tirupattur - 635701</span>
        </p>

        <div className="mt-10 text-center">
          <p className="text-lg text-muted">📩 Feel free to reach out to me for projects or collaborations!</p>
        </div>
      </div>
    </motion.div>
  );
}
