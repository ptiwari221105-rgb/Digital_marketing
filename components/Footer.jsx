import Link from 'next/link'
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/mavaliy',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mavaliy',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/mavaliy',
    icon: Instagram,
  },
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  'SEO Optimization',
  'Google Ads Management',
  'Facebook Ads',
  'Social Media Growth',
  'Brand Strategy',
  'Email Marketing',
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold">Mavaliy</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professional digital marketing services specializing in SEO, Google Ads,
                Facebook Ads, and brand strategy. Transform your online presence with Mavaliy.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">hello@mavaliy.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    123 Digital Street<br />
                    Marketing City, MC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-navy-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Mavaliy Digital Marketing. All rights reserved.
              </p>
              <p className="text-teal-400 text-sm font-medium mt-2 md:mt-0">
                Powered by Mavaliy Digital Marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
