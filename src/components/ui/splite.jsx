'use client'

import { Suspense, lazy, useState, useEffect, useRef } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineScene({ scene, className }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { rootMargin: '100px' } // Start loading slightly before visible
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className} style={{ minHeight: '100%' }}>
      {isVisible ? (
        <Suspense 
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-4 border-neutral-700 border-t-neutral-200 animate-spin"></div>
            </div>
          }
        >
          <Spline
            scene={scene}
            className={className}
          />
        </Suspense>
      ) : (
        <div className="w-full h-full" />
      )}
    </div>
  )
}
