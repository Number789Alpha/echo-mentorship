
import React from 'react';
import { Navbar } from './Navbar';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-white border-t border-gray-100">
        <div className="section-container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-semibold text-xl mb-4">Echo Mentor</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Where Guidance Today Meets Tomorrow. Connecting mentors and mentees for personal and professional growth.
              </p>
              <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} Echo Mentor. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="/join" className="text-muted-foreground hover:text-foreground transition-colors">Join Us</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
