'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Eye } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-commerce SEO Campaign',
    category: 'SEO Optimization',
    description: 'Increased organic traffic by 250% and conversions by 180% for a fashion e-commerce store through comprehensive SEO strategy.',
    image: '/images/project-1.jpg',
    results: ['250% Traffic Increase', '180% Conversion Boost', 'Top 10 Rankings'],
    link: '#',
    tags: ['SEO', 'E-commerce', 'Analytics']
  },
  {
    id: 2,
    title: 'Google Ads Campaign',
    category: 'Paid Advertising',
    description: 'Managed $50K+ monthly ad spend across Google Ads and Facebook Ads, achieving 400% ROI for B2B SaaS company.',
    image: '/images/project-2.jpg',
    results: ['400% ROI', '$50K+ Monthly Spend', 'Lead Gen Focus'],
    link: '#',
    tags: ['Google Ads', 'Facebook Ads', 'B2B']
  },
  {
    id: 3,
    title: 'Social Media Growth',
    category: 'Social Media Marketing',
    description: 'Grew Instagram following from 5K to 50K+ in 6 months through strategic content and paid advertising.',
    image: '/images/project-3.jpg',
    results: ['10x Follower Growth', '50K+ Followers', 'Brand Awareness'],
    link: '#',
    tags: ['Instagram', 'Content Strategy', 'Growth']
  },
  {
    id: 4,
    title: 'Brand Strategy & Website',
    category: 'Digital Marketing',
    description: 'Complete brand overhaul and website redesign for a local business, resulting in 300% increase in online inquiries.',
    image: '/images/project-4.jpg',
    results: ['300% Inquiry Increase', 'Brand Redesign', 'Website Launch'],
    link: '#',
    tags: ['Branding', 'Web Design', 'Local SEO']
  },
  {
    id: 5,
    title: 'Content Marketing Campaign',
    category: 'Content Strategy',
    description: 'Developed and executed content marketing strategy that established the company as thought leader in their industry.',
    image: '/images/project-5.jpg',
    results: ['Industry Leadership', 'Backlink Growth', 'Authority Building'],
    link: '#',
    tags: ['Content Marketing', 'SEO', 'Thought Leadership']
  },
  {
    id: 6,
    title: 'Email Marketing Automation',
    category: 'Email Marketing',
    description: 'Built automated email sequences that increased customer lifetime value by 150% and reduced churn by 40%.',
    image: '/images/project-6.jpg',
    results: ['150% CLV Increase', '40% Churn Reduction', 'Automation'],
    link: '#',
    tags: ['Email Marketing', 'Automation', 'Retention']
  }
]

export default function Portfolio() {
  return (
    <section className="py-16 bg-white dark:bg-navy-950">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            Portfolio & Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real results from real campaigns. See how I've helped businesses achieve their digital marketing goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-navy-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-teal-400 to-teal-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Eye className="h-12 w-12 text-white opacity-80" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-navy-900 dark:text-white mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                        <div className="w-1 h-1 bg-teal-500 rounded-full mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 text-sm font-medium transition-colors duration-200"
                >
                  View Case Study
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to see similar results for your business?
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
