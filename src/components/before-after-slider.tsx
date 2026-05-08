"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  category?: string
}

export function BeforeAfterSlider({ beforeImage, afterImage, category }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX
    const position = ((x - rect.left) / rect.width) * 100
    
    if (position >= 0 && position <= 100) {
      setSliderPos(position)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none border-4 border-white shadow-xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image src={afterImage} alt="After" fill className="object-cover" />
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">After</div>
      </div>

      {/* Before Image (Foreground with Clip Path) */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image src={beforeImage} alt="Before" fill className="object-cover" />
        <div className="absolute bottom-4 left-4 bg-white/50 backdrop-blur-md text-black px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Before</div>
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute inset-y-0 z-20 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3 bg-primary rounded-full" />
            <div className="w-0.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </div>
      
      {category && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-primary/90 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg">
          {category}
        </div>
      )}
    </div>
  )
}
