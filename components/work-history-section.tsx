'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function WorkHistorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const workHistory = [
    {
      year: '2018-2019',
      title: 'Fitness Industry',
      description: 'Launched social media campaigns for fitness brands, increasing engagement by 150% and follower growth by 200%.',
      achievements: ['2M+ reach', '50K+ new followers', '300% engagement boost']
    },
    {
      year: '2019-2020',
      title: 'Beauty & Cosmetics',
      description: 'Managed influencer partnerships and content creation for beauty brands, driving significant sales growth.',
      achievements: ['5M+ impressions', '25% sales increase', '100+ influencer partnerships']
    },
    {
      year: '2020-2021',
      title: 'Real Estate',
      description: 'Developed lead generation strategies through social media, helping real estate agents close more deals.',
      achievements: ['500+ qualified leads', '30% conversion rate', '1M+ property views']
    },
    {
      year: '2021-2022',
      title: 'E-Commerce',
      description: 'Optimized product listings and social media ads for e-commerce businesses, boosting online sales.',
      achievements: ['10M+ product views', '40% sales growth', '200+ successful campaigns']
    },
    {
      year: '2022-2023',
      title: 'Media & Entertainment',
      description: 'Created viral content strategies for media companies, increasing brand visibility and audience engagement.',
      achievements: ['20M+ views', '500K+ subscribers', '50+ viral posts']
    },
    {
      year: '2023-Present',
      title: 'Education & SaaS',
      description: 'Currently helping educational institutions and SaaS companies build their online presence and generate leads.',
      achievements: ['Ongoing projects', 'Multiple success stories', 'Growing client base']
    }
  ];

  return (
    <section id="work-history" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Work History
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            6+ years of experience across diverse industries, delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white/20 via-white/10 to-white/5 rounded-full hidden md:block" />

          <div className="space-y-12">
            {workHistory.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-black z-10" />

                {/* Content Card */}
                <div className="flex-1 max-w-md">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400 font-medium">{item.year}</span>
                      </div>
                      <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                      <div className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full" />
                            <span className="text-sm text-gray-400">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}