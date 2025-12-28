import { StaticImageData } from 'next/image';

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Project {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  _id: string;
}

export interface Client {
  id: string;
  name: string;
  logo?: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  designation: string;
  company?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description?: string;
  avatar: StaticImageData;
  link: string;
}

export interface ContactInfo {
  address: string;
  phones: string[];
  email: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
