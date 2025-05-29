'use client'

import SmoothScrollProvider from '@/components/smooth-scroll-provider'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import AboutSection from '@/components/about-section'
import PricingSection from '@/components/pricing-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import { NotificationContainer } from '@/components/notification'
import { useNotifications } from '@/hooks/use-notifications'

export default function Home() {
  const { notifications, removeNotification, showSuccess, showInfo, showWarning } = useNotifications()

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen">
        <Navigation showNotification={showInfo} />
        <main>
          <HeroSection />
          <FeaturesSection />
          <AboutSection />
          <PricingSection showNotification={showInfo} />
          <ContactSection />
        </main>
        <Footer showNotification={showInfo} />
        <NotificationContainer 
          notifications={notifications} 
          onClose={removeNotification} 
        />
      </div>
    </SmoothScrollProvider>
  )
}
