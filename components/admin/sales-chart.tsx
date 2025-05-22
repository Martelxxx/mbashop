"use client"

import { useEffect, useRef } from "react"

export default function SalesChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Sample data
    const data = [
      65, 59, 80, 81, 56, 55, 40, 45, 60, 75, 85, 90, 95, 100, 110, 105, 95, 90, 85, 95, 110, 120, 130, 125, 115, 105,
      95, 85, 90, 100,
    ]

    const labels = Array.from({ length: 30 }, (_, i) => i + 1)

    // Chart dimensions
    const width = ctx.canvas.width
    const height = ctx.canvas.height
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Scale factors
    const maxValue = Math.max(...data) * 1.1
    const xScale = chartWidth / (data.length - 1)
    const yScale = chartHeight / maxValue

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw y-axis labels
    ctx.font = "12px sans-serif"
    ctx.fillStyle = "#64748b"
    ctx.textAlign = "right"

    for (let i = 0; i <= 5; i++) {
      const value = Math.round((maxValue / 5) * i)
      const y = height - padding - value * yScale
      ctx.fillText(value.toLocaleString(), padding - 10, y + 4)

      // Grid line
      ctx.beginPath()
      ctx.strokeStyle = "#e2e8f0"
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()
    }

    // Draw x-axis labels (every 5 days)
    ctx.textAlign = "center"
    for (let i = 0; i < labels.length; i += 5) {
      const x = padding + i * xScale
      ctx.fillText(labels[i].toString(), x, height - padding + 20)
    }

    // Draw line chart
    ctx.beginPath()
    ctx.strokeStyle = "#0ea5e9"
    ctx.lineWidth = 2

    // Create gradient for area under the line
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding)
    gradient.addColorStop(0, "rgba(14, 165, 233, 0.2)")
    gradient.addColorStop(1, "rgba(14, 165, 233, 0)")

    // Draw line
    data.forEach((value, index) => {
      const x = padding + index * xScale
      const y = height - padding - value * yScale

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw area under the line
    ctx.lineTo(padding + (data.length - 1) * xScale, height - padding)
    ctx.lineTo(padding, height - padding)
    ctx.closePath()
    ctx.fillStyle = gradient
    ctx.fill()

    // Draw data points
    data.forEach((value, index) => {
      const x = padding + index * xScale
      const y = height - padding - value * yScale

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.strokeStyle = "#0ea5e9"
      ctx.lineWidth = 2
      ctx.fill()
      ctx.stroke()
    })
  }, [])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} width={800} height={300} className="w-full h-full" />
    </div>
  )
}
