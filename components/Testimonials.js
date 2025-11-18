'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    content: 'Mavaliy transformed our online presence completely. Our organic traffic increased by 300% and we saw a significant boost in qualified leads. The ROI on our digital marketing investment has been exceptional.',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Marketing Director',
    company: 'GrowthCorp',
    content: 'Working with Mavaliy was a game-changer for our business. The Google Ads campaigns delivered 400% ROI, and the SEO strategy put us on the first page for all our target keywords. Highly recommended!',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Founder',
    company: 'LocalEats',
    content: 'As a small business owner, I was skeptical about digital marketing spending. Mavaliy proved me wrong. Our social media following grew 10x, and we saw a 250% increase in foot traffic to our restaurant.',
    rating: 5,
    image: '/images/testimonial-3.jpg'
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'VP of Sales',
    company: 'B2B Solutions',
    content: 'The lead generation campaigns Mavaliy managed for us were outstanding. We went from struggling to find qualified prospects to having more leads than we could handle. The quality and quantity both improved dramatically.',
    rating: 5,
    image: '/images/testimonial-4.jpg'
  },
  {
    id: 5,
    name: 'Lisa Park',
    position: 'Brand Manager',
    company: 'FashionForward',
    content: 'Mavaliy helped us build a strong brand presence online. The content strategy and social media management took our engagement rates through the roof. Our brand awareness increased significantly.',
    rating: 5,
    image: '/images/testimonial-5.jpg'
  },
  {
    id: 6,
    name: 'Robert Kim',
    position: 'Operations Manager',
    company: 'Manufacturing Plus',
    content: 'The B2B marketing strategy Mavaliy developed for us was exactly what we needed. Our inbound leads increased by 180%, and the quality of those leads was much higher than before.',
    rating: 5,
    image: '/images/testimonial-6.jpg'
  }
]

export default function Testimonials() {
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
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-navy-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-teal-200 opacity-20">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-navy-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-teal-600 dark:text-teal-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-gray-600 dark:text-gray-400">
              <div className="text-2xl font-bold text-navy-900 dark:text-white">50+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              <div className="text-2xl font-bold text-navy-900 dark:text-white">100+</div>
              <div className="text-sm">Projects Done</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              <div className="text-2xl font-bold text-navy-900 dark:text-white">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              <div className="text-2xl font-bold text-navy-900 dark:text-white">300%</div>
              <div className="text-sm">Avg. Growth</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
