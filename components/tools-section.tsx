'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function ToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const tools = [
    { name: 'Canva', category: 'Design' },
    { name: 'Photoshop', category: 'Design' },
    { name: 'Meta Ads', category: 'Advertising' },
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'Buffer', category: 'Management' },
    { name: 'Sprout Social', category: 'Management' },
    { name: 'CapCut', category: 'Video Editing' },
    { name: 'Hootsuite', category: 'Management' },
    { name: 'Later', category: 'Scheduling' },
    { name: 'TubeBuddy', category: 'YouTube' },
    { name: 'Tailwind', category: 'Pinterest' },
    { name: 'Socialblade', category: 'Analytics' }
  ];

  const categories = ['Design', 'Advertising', 'Analytics', 'Management', 'Video Editing', 'Scheduling', 'YouTube', 'Pinterest'];
  const categoryColors = {
    'Design': 'from-blue-500/20 to-purple-500/20',
    'Advertising': 'from-green-500/20 to-emerald-500/20',
    'Analytics': 'from-orange-500/20 to-red-500/20',
    'Management': 'from-indigo-500/20 to-blue-500/20',
    'Video Editing': 'from-pink-500/20 to-rose-500/20',
    'Scheduling': 'from-teal-500/20 to-cyan-500/20',
    'YouTube': 'from-red-500/20 to-pink-500/20',
    'Pinterest': 'from-rose-500/20 to-red-500/20'
  };

  return (
    <section id="tools" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Tools & Platforms
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional tools and platforms I use to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className={`bg-gradient-to-br ${categoryColors[tool.category as keyof typeof categoryColors]} border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-white font-semibold text-lg mb-2">{tool.name}</h3>
                  <p className="text-gray-300 text-sm">{tool.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} border border-white/10 backdrop-blur-sm`}
            >
              <span className="text-white text-sm font-medium">{category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}