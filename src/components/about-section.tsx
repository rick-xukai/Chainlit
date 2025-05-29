'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Rocket, Heart } from 'lucide-react'

const stats = [
  { number: '10,000+', label: 'Active Developers', icon: Users },
  { number: '50,000+', label: 'Apps Deployed', icon: Rocket },
  { number: '99.9%', label: 'Uptime SLA', icon: Award },
  { number: '24/7', label: 'Support', icon: Heart },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Empowering the next generation of{' '}
              <span className="gradient-text">AI developers</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Chainlit, we believe that building AI applications should be accessible to everyone. 
              Our mission is to democratize AI development by providing powerful, easy-to-use tools 
              that enable developers to create amazing conversational experiences.
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Developer-First Approach</h3>
                  <p className="text-muted-foreground">
                    Built by developers, for developers. We understand the challenges you face 
                    and design our tools to solve real problems.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Open Source Community</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of open source. Our core platform is open source 
                    and backed by a vibrant community of contributors.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Enterprise Ready</h3>
                  <p className="text-muted-foreground">
                    From startups to Fortune 500 companies, our platform scales to meet 
                    your needs with enterprise-grade security and support.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  className="text-3xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.div>
                
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Our Vision for the Future
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a world where every developer can harness the power of AI to create 
              meaningful, impactful applications. By removing the complexity and barriers to AI development, 
              we're enabling a new generation of innovators to build the future we all want to see.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 