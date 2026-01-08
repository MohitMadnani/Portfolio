'use client';

import { Linkedin, Github } from 'lucide-react';
import type { Contact } from '../data/portfolio-data';

interface ContactProps {
  contact: Contact;
}

export default function Contact({ contact }: ContactProps) {
  return (
    <div className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 text-black dark:text-white animate-fade-in-up">Contact</h2>
        <p className="text-base text-black/70 dark:text-white/70 mb-4 animate-fade-in-up animate-delay-100">
          Have a question or want to work together? Leave your details and I&apos;ll get back to you as soon as possible.
        </p>
        <div className="space-y-3 animate-fade-in-up animate-delay-200">
          <div>
            <a
              href={`mailto:${contact.email}`}
              className="text-base text-black dark:text-white hover:opacity-70 transition-opacity"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex gap-6">
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity text-black dark:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            )}
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity text-black dark:text-white"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            )}
            {contact.twitter && (
              <a
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity text-black dark:text-white"
                aria-label="Twitter"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

