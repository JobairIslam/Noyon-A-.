'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram, Video, Youtube, Twitter, MapPin, TrendingUp } from 'lucide-react';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: TrendingUp,
      title: 'Social Media Management & Strategy',
      description: 'Comprehensive social media strategy, content planning, and account management across all platforms.'
    },
    {
      icon: Instagram,
      title: 'Instagram Reels & Ads',
      description: 'Create engaging Instagram Reels, Stories, and run targeted ad campaigns to boost your reach.'
    },
    {
      icon: Video,
      title: 'TikTok Trends & Short Video Editing',
      description: 'Stay ahead of TikTok trends with viral-worthy content and professional video editing.'
    },
    {
      icon: Youtube,
      title: 'YouTube SEO & Optimization',
      description: 'Optimize your YouTube channel for maximum visibility and subscriber growth.'
    },
    {
      icon: Twitter,
      title: 'Twitter & LinkedIn Marketing',
      description: 'Professional networking and thought leadership content for B2B growth.'
    },
    {
      icon: MapPin,
      title: 'Pinterest SEO & Ads',
      description: 'Drive traffic and sales through strategic Pinterest optimization and advertising.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive social media solutions to elevate your brand and drive meaningful engagement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-white/10 rounded-full w-fit">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}