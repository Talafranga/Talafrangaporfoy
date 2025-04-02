'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';

export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, including but not limited to your name, email address, and any other information you choose to provide. We also collect information automatically when you visit our website, such as your IP address, browser type, and device information."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience. We may also use this information to send you updates about our services or to respond to your inquiries."
    },
    {
      title: "Information Sharing",
      content: "We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website or conducting our business, subject to confidentiality obligations."
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information. To exercise these rights, please contact us."
    },
    {
      title: "Cookies",
      content: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
    },
    {
      title: "Changes to This Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at your.email@example.com"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <Header />

      {/* Privacy Section */}
      <section className="py-20 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <ShieldCheckIcon className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-400">
              Last Updated: March 15, 2024
            </p>
          </motion.div>

          {/* Privacy Content */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold mb-4 text-blue-400">
                  {section.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 