'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Examples', href: '#' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  resources: [
    { name: 'Community', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Status', href: '#' },
    { name: 'Changelog', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'GDPR', href: '#' },
  ],
};

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  //   { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: XIcon, href: 'https://x.com/ChainlitAI' },
  //   { name: 'LinkedIn', icon: Linkedin, href: '#' },
  //   { name: 'Email', icon: Mail, href: 'mailto:hello@chainlit.io' },
];

interface FooterProps {
  showNotification?: (
    title: string,
    message: string,
    duration?: number
  ) => void;
}

export default function Footer({ showNotification }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For external links, show notification since this is a demo
      if (showNotification) {
        if (href.includes('github')) {
          showNotification(
            'Opening GitHub',
            'Redirecting to our GitHub repository with open source components.',
            3000
          );
        } else if (href.includes('twitter') || href.includes('linkedin')) {
          showNotification(
            'Opening Social Media',
            'Redirecting to our social media page for latest updates.',
            3000
          );
        } else if (href.includes('mailto')) {
          showNotification(
            'Opening Email Client',
            'Your default email client will open to contact our team.',
            3000
          );
        } else {
          showNotification(
            'External Link',
            'Opening external page in a new tab.',
            3000
          );
        }
      }
    }
  };

  const handleNewsletterSignup = () => {
    if (showNotification) {
      showNotification(
        'Successfully Subscribed!',
        "Thank you for subscribing! You'll receive our latest updates and AI insights.",
        4000
      );
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-2 mb-4"
              >
                <Image
                  src="/logo.jpg"
                  alt="Chainlit"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold gradient-text">
                  Chainlit
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-muted-foreground mb-6 max-w-sm"
              >
                The fastest way to create and deploy conversational AI
                applications. Build the future of AI interactions with Chainlit.
              </motion.p>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-primary group-hover:text-primary" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Links sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold mb-2">Stay updated</h3>
              <p className="text-muted-foreground text-sm">
                Get the latest news and updates about Chainlit.
              </p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button
                onClick={handleNewsletterSignup}
                className="gradient-bg text-white hover:opacity-90 transition-opacity"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-sm mb-4 md:mb-0"
          >
            © 2024 Chainlit. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors text-sm group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
