'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  MessageSquare, 
  Zap, 
  Shield, 
  Code, 
  Palette, 
  Globe,
  Database,
  Cpu,
  Users
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: MessageSquare,
    title: 'Conversational UI',
    description: 'Build beautiful chat interfaces with pre-built components and customizable themes.',
    color: 'text-blue-500'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deploy your AI applications in seconds with our optimized infrastructure.',
    color: 'text-yellow-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
    color: 'text-green-500'
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Simple Python API with extensive documentation and community support.',
    color: 'text-purple-500'
  },
  {
    icon: Palette,
    title: 'Customizable',
    description: 'Full control over styling, branding, and user experience.',
    color: 'text-pink-500'
  },
  {
    icon: Globe,
    title: 'Multi-language',
    description: 'Support for 50+ languages with automatic translation capabilities.',
    color: 'text-indigo-500'
  },
  {
    icon: Database,
    title: 'Data Integration',
    description: 'Connect to any database, API, or data source seamlessly.',
    color: 'text-cyan-500'
  },
  {
    icon: Cpu,
    title: 'AI Models',
    description: 'Support for OpenAI, Anthropic, Hugging Face, and custom models.',
    color: 'text-orange-500'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built-in tools for team development and project management.',
    color: 'text-red-500'
  }
]

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" ref={ref} className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to build{' '}
            <span className="gradient-text">amazing AI apps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From rapid prototyping to production deployment, Chainlit provides all the tools 
            and features you need to create world-class AI applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ${feature.color}`}
                  >
                    <feature.icon size={24} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to experience the power of Chainlit?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers who are already building the future of AI applications.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="gradient-bg text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Start Building Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 