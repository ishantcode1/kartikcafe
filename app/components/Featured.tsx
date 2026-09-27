'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Cookie, Egg, Coffee, Utensils, ArrowRight } from 'lucide-react';

const featuredItems = [
  {
    icon: Cookie,
    title: 'Signature Waffles',
    description: 'Crispy on the outside, fluffy inside. Topped with premium chocolate, Nutella, or white chocolate.',
    color: 'from-amber-400 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50',
    cta: 'Try Our Waffles',
    href: '#menu?category=Waffles',
    decoration: (
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 opacity-20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    ),
  },
  {
    icon: Coffee,
    title: 'Dreamy Shakes',
    description: 'Thick, creamy, and utterly indulgent. Oreo, chocolate, butterscotch, strawberry, and blueberry.',
    color: 'from-purple-400 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    cta: 'Sip a Shake',
    href: '#menu?category=Shakes',
    decoration: (
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-300 to-pink-400 opacity-20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    ),
  },
  {
    icon: Egg,
    title: 'Fluffy Pancakes',
    description: 'Warm mini pancakes served fresh. The perfect sweet bite for any time of day.',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50',
    cta: 'Taste Pancakes',
    href: '#menu?category=Pancakes',
    decoration: (
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 opacity-20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
    ),
  },
  {
    icon: Coffee,
    title: 'Refreshing Sips',
    description: 'From iced mojitos in seven flavors to perfectly brewed chai and cold coffee.',
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50',
    cta: 'Explore Drinks',
    href: '#menu?category=Mojitos',
    decoration: (
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-300 to-teal-400 opacity-20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
      />
    ),
  },
];

export default function Featured() {
  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden grain"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-pink-50" />
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-pink-200/50 to-transparent" />

      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-5 w-32 h-32 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-5 w-40 h-40 rounded-full bg-gradient-to-br from-purple-300 to-pink-400 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Signature Moments
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Featured{' '}
            <br />
            <span className="gradient-text">Delights</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${item.bgColor} glass border border-pink-200 overflow-hidden group`}
            >
              {item.decoration}

              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>

                <motion.a
                  href={item.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 text-pink-700 font-medium hover:bg-pink-50 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 opacity-30 blur-xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-20 rounded-4xl overflow-hidden glass-dark"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-400/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-3xl" />

          <div className="relative p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready for a{' '}
                <span className="gradient-text">Sweet Escape</span>?
              </h3>
              <p className="text-pink-100 text-lg max-w-md mx-auto md:mx-0">
                Come visit us and taste the happiness. Every scoop tells a story.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="#menu"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white font-medium shadow-lg hover:shadow-[0_0_40px_rgba(255,105,180,0.6)] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Full Menu
                <motion.span className="ml-2 w-5 h-5 inline-block" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                  <Heart className="w-5 h-5" />
                </motion.span>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Visit Us
                <Utensils className="ml-2 w-5 h-5 inline-block" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}