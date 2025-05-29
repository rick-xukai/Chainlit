'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Zap, Crown, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface PricingSectionProps {
  showNotification?: (title: string, message: string, duration?: number) => void
}

export default function PricingSection({ showNotification }: PricingSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isAnnual, setIsAnnual] = useState(false)

  const handlePurchase = (planName: string) => {
    if (showNotification) {
      if (planName === 'Starter') {
        showNotification(
          'Welcome to Chainlit!',
          'Your free account is ready. Start building amazing AI applications today.',
          4000
        )
      } else if (planName === 'Pro') {
        showNotification(
          'Pro Trial Started',
          'Your 14-day Pro trial has begun. Enjoy advanced features and priority support.',
          4000
        )
      } else if (planName.includes('Enterprise')) {
        showNotification(
          'Sales Team Contacted',
          'Our enterprise team will reach out within 24 hours to discuss your custom solution.',
          4000
        )
      } else {
        showNotification(
          'Redirecting to Checkout',
          `Setting up your ${planName} plan. You'll be redirected to our secure payment portal.`,
          4000
        )
      }
    }
  }

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Up to 1,000 messages/month',
        'Basic AI models',
        'Community support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false,
      buttonText: 'Get Started Free'
    },
    {
      name: 'Pro',
      icon: Crown,
      description: 'Best for growing teams and businesses',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Up to 50,000 messages/month',
        'Advanced AI models',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'API access',
        'Team collaboration'
      ],
      popular: true,
      buttonText: 'Start Pro Trial'
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      description: 'For large organizations with custom needs',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        'Unlimited messages',
        'All AI models',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'Custom deployment',
        'Training & onboarding'
      ],
      popular: false,
      buttonText: 'Contact Sales'
    }
  ]

  return (
    <section id="pricing" ref={ref} className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. Start free and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center space-x-4 mb-12"
          >
            <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm"
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
              >
                Save 20%
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </motion.div>
              )}
              
              <Card className={`h-full transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}>
                <CardHeader className="text-center pb-8">
                  <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 ${
                    plan.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <p className="text-sm text-muted-foreground mt-1">
                        ${Math.round(plan.annualPrice / 12)}/month billed annually
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 + featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handlePurchase(plan.name)}
                    className={`w-full transition-all duration-300 ${
                      plan.popular
                        ? 'gradient-bg text-white hover:opacity-90'
                        : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer custom enterprise solutions with dedicated support, 
              custom integrations, and tailored pricing for large organizations.
            </p>
            <Button
              onClick={() => handlePurchase('Enterprise Custom')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact Enterprise Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 