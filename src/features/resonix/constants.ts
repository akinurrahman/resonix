import { Akinur, IMS, Jobayer, Masud, PAYMAG } from '@/assets';
import { CRYPGO } from '@/assets';

import type {
  Client,
  ContactInfo,
  NavLink,
  Project,
  Service,
  TeamMember,
  Testimonial,
} from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Clients', href: '#clients' },
  { label: 'Team', href: '#team' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const PHONE_NUMBER = '917099119857';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Website Design & Development',
    description:
      'Custom-built websites tailored to your business needs with modern design and functionality.',
  },
  {
    id: '2',
    title: 'Custom Web Solutions',
    description:
      'Bespoke web applications designed to solve your unique business challenges efficiently.',
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description:
      'User-centered design that combines aesthetics with intuitive experiences for your audience.',
  },
  {
    id: '4',
    title: 'Business Websites',
    description:
      'Professional websites that establish your online presence and drive business growth.',
  },
  {
    id: '5',
    title: 'Landing Pages',
    description: 'Conversion-focused landing pages designed to turn visitors into customers.',
  },
  {
    id: '6',
    title: 'Ongoing Support & Maintenance',
    description:
      'Reliable technical support and regular updates to keep your website running smoothly.',
  },
];

export const PROJECTS: Project[] = [
  {
    _id: 'paymag',
    title: 'PayMag – Bill Payments & Cashback Platform',
    description:
      'A clean, responsive landing page for Paymag Communications Private Limited, showcasing bill payments, cashback features, and user trust with transparent legal pages.',
    link: 'https://paymag.akinurrahman.com/',
    imgSrc: PAYMAG,
    linkText: 'View Project',
  },
  {
    _id: 'crypgo',
    title: 'Crypgo – Crypto Exchange Landing Page',
    description:
      'A modern, responsive landing page for a crypto exchange, built with Next.js and Tailwind CSS to showcase clean UI, smooth transitions, and frontend best practices.',
    link: 'https://crypgo.akinurrahman.com',
    imgSrc: CRYPGO,
    linkText: 'View Project',
  },
  {
    _id: 'ims',
    title: 'Inventory Management System',
    description:
      'A web-based inventory management system designed to track stock, manage items, and monitor inventory status in real time for operational efficiency.',
    link: '#',
    imgSrc: IMS,
    linkText: 'View Project',
  },
];

export const CLIENTS: Client[] = [
  { id: '1', name: 'TechStart Inc.' },
  { id: '2', name: 'Global Solutions' },
  { id: '3', name: 'Creative Studios' },
  { id: '4', name: 'Business Pro' },
  { id: '5', name: 'Digital Ventures' },
  { id: '6', name: 'Innovation Labs' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    content:
      'Resonix transformed our online presence completely. Their attention to detail and commitment to quality is unmatched. Highly recommended!',
    author: 'Sarah Johnson',
    designation: 'CEO',
    company: 'TechStart Inc.',
  },
  {
    id: '2',
    content:
      'Working with Resonix was a seamless experience. They delivered exactly what we needed, on time and within budget.',
    author: 'Michael Chen',
    designation: 'Product Manager',
    company: 'Global Solutions',
  },
  {
    id: '3',
    content:
      'The team at Resonix is professional, responsive, and genuinely invested in our success. Our website has never looked better.',
    author: 'Emily Rodriguez',
    designation: 'Marketing Director',
    company: 'Creative Studios',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Akinur Rahman',
    role: 'Co-Founder & Fullstack Developer',
    description: 'Strategic thinker driving business growth and client relationships.',
    avatar: Akinur,
    link: 'https://www.linkedin.com/in/akinurrahman/',
  },
  {
    id: '2',
    name: 'Sheikh Masud Hassan',
    role: 'Co-Founder & Frontend Developer',
    description: 'Full-stack developer with expertise in building scalable web solutions.',
    avatar: Masud,
    link: 'https://www.linkedin.com/in/sheikh-masud-hassan/',
  },
  {
    id: '3',
    name: 'Jobayer Ahmed',
    role: 'Co-Founder & Marketing Head',
    description: 'Creative designer focused on user experience and visual storytelling.',
    avatar: Jobayer,
    link: '#',
  },
];

export const CONTACT_INFO: ContactInfo = {
  address: 'Bilasipara, Dhubri, Assam - 783348',
  phones: ['7086978159', '9395474749', '7099119857'],
  email: 'team@resonix.com',
};

export const BRAND = {
  name: 'Resonix',
  tagline: 'Digital Agency for Modern Businesses',
  description:
    'High-quality, efficient, and on-demand web solutions for small enterprises and organizations.',
  mission:
    'At Resonix, we believe every business deserves a professional digital presence. We combine technical expertise with creative excellence to deliver web solutions that are not just functional, but truly exceptional.',
};
