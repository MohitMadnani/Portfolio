'use client';

import { Linkedin, Github } from 'lucide-react';
import type { Contact } from '../data/portfolio-data';

interface ContactProps {
  contact: Contact;
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
          Have a question or want to work together? Leave your details and I&apos;ll get back to you as soon as possible.
        </p>
        <div className="space-y-4">
          <div>
            <a
              href={`mailto:${contact.email}`}
              className="text-lg hover:opacity-70 transition-opacity"
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
                className="hover:opacity-70 transition-opacity"
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
                className="hover:opacity-70 transition-opacity"
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
                className="hover:opacity-70 transition-opacity"
                aria-label="Twitter"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

