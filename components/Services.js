'use client'

import { motion } from 'framer-motion'
import { Search, Target, Users, Palette, Mail, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic with proven SEO strategies, keyword research, and technical optimization.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
  },
  {
    icon: Target,
    title: 'Paid Ads Management',
    description: 'Maximize your ROI with expertly managed Google Ads and Meta Ads campaigns. Reach your target audience effectively.',
    features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'A/B Testing']
  },
  {
    icon: Users,
    title: 'Social Media Growth',
    description: 'Build and engage your social media community with strategic content, advertising, and growth tactics.',
    features: ['Content Strategy', 'Community Management', 'Social Ads', 'Analytics']
  },
  {
    icon: Palette,
    title: 'Brand Strategy & Digital Marketing',
    description: 'Develop a comprehensive brand strategy and digital marketing plan that drives results and builds long-term success.',
    features: ['Brand Strategy', 'Marketing Plans', 'Content Marketing', 'Brand Identity']
  }
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-navy-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business goals and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-navy-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to transform your digital presence?
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
