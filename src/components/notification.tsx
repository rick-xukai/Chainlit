'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Info, AlertCircle } from 'lucide-react'
import { useEffect } from 'react'

export interface NotificationProps {
  id: string
  type: 'success' | 'info' | 'warning'
  title: string
  message: string
  duration?: number
  onClose: (id: string) => void
}

export default function Notification({ 
  id, 
  type, 
  title, 
  message, 
  duration = 5000, 
  onClose 
}: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id)
    }, duration)

    return () => clearTimeout(timer)
  }, [id, duration, onClose])

  const icons = {
    success: CheckCircle,
    info: Info,
    warning: AlertCircle,
  }

  const colors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  }

  const iconColors = {
    success: 'text-green-500',
    info: 'text-blue-500',
    warning: 'text-yellow-500',
  }

  const Icon = icons[type]

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative flex items-start p-4 rounded-lg border shadow-lg backdrop-blur-sm ${colors[type]} max-w-sm w-full`}
    >
      <div className={`flex-shrink-0 ${iconColors[type]}`}>
        <Icon className="w-5 h-5" />
      </div>
      
      <div className="ml-3 flex-1">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-sm opacity-90 mt-1">{message}</p>
      </div>
      
      <button
        onClick={() => onClose(id)}
        className="ml-4 flex-shrink-0 text-current opacity-60 hover:opacity-100 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
      
      {/* Progress bar */}
      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: duration / 1000, ease: 'linear' }}
        className="absolute bottom-0 left-0 h-1 bg-current opacity-30 rounded-b-lg"
      />
    </motion.div>
  )
}

// Notification Container Component
export function NotificationContainer({ 
  notifications, 
  onClose 
}: { 
  notifications: NotificationProps[]
  onClose: (id: string) => void 
}) {
  return (
    <div className="fixed top-4 right-4 z-[100] space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            {...notification}
            onClose={onClose}
          />
        ))}
      </AnimatePresence>
    </div>
  )
} 