'use client'

import { motion } from 'framer-motion'
import { Download, Award, Users, TrendingUp } from 'lucide-react'

const skills = [
  'SEO Optimization',
  'Google Ads Management',
  'Facebook Ads',
  'Content Marketing',
  'Branding',
  'Email Marketing',
  'Analytics & Reporting'
]

const stats = [
  { icon: Users, label: 'Happy Clients', value: '50+' },
  { icon: TrendingUp, label: 'Revenue Growth', value: '300%' },
  { icon: Award, label: 'Projects Completed', value: '100+' },
]

export default function About() {
  return (
    <section className="py-16 bg-white dark:bg-navy-950">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-6">
              About Mavaliy Digital Marketing
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                With over 5 years of experience in digital marketing, I specialize in helping businesses
                grow their online presence through strategic SEO, paid advertising, and data-driven marketing solutions.
              </p>
              <p>
                My expertise spans across Google Ads, Facebook Ads, SEO optimization, content marketing,
                and brand strategy. I've helped numerous businesses increase their revenue by optimizing
                their digital marketing efforts and implementing proven strategies.
              </p>
              <p>
                I believe in transparent communication, measurable results, and building long-term
                partnerships with my clients. Every campaign is tailored to your specific goals and budget.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="/cv.pdf"
                download
                className="btn-primary inline-flex items-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 dark:bg-navy-900 rounded-lg"
                >
                  <Icon className="h-8 w-8 text-teal-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
