"use client"

import { useEffect, useState } from "react"

export default function SynapseSignature() {
  const [size, setSize] = useState(30)

  useEffect(() => {
    const handleResize = () => {
      // 4% of viewport width, max 30px
      const newSize = Math.min(window.innerWidth * 0.04, 30)
      setSize(newSize)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className="fixed bottom-0 right-0 z-50 pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #FF6B6B, #FF8E53, #FFCB70, #6A0DAD, #9370DB)",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />
    </div>
  )
}
