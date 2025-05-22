"use client"

import { useEffect, useRef } from "react"

export default function TopProductsChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Sample data
    const data = [
      { name: "Montre Rolex Daytona", value: 120 },
      { name: "Sac à main Chanel", value: 95 },
      { name: "Parfum Dior Sauvage", value: 80 },
      { name: "Lunettes Ray-Ban", value: 65 },
      { name: "Bracelet Cartier", value: 50 },
    ]

    // Chart dimensions
    const width = ctx.canvas.width
    const height = ctx.canvas.height
    const padding = { top: 30, right: 20, bottom: 50, left: 150 }
    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    // Scale factors
    const maxValue = Math.max(...data.map((d) => d.value)) * 1.1
    const barHeight = (chartHeight / data.length) * 0.6
    const barSpacing = (chartHeight / data.length) * 0.4

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding.left, padding.top)
    ctx.lineTo(padding.left, height - padding.bottom)
    ctx.stroke()

    // Draw x-axis labels and grid lines
    ctx.font = "12px sans-serif"
    ctx.fillStyle = "#64748b"
    ctx.textAlign = "center"

    for (let i = 0; i <= 5; i++) {
      const value = Math.round((maxValue / 5) * i)
      const x = padding.left + (value / maxValue) * chartWidth

      ctx.fillText(value.toString(), x, height - padding.bottom + 20)

      // Grid line
      ctx.beginPath()
      ctx.strokeStyle = "#e2e8f0"
      ctx.moveTo(x, padding.top)
      ctx.lineTo(x, height - padding.bottom)
      ctx.stroke()
    }

    // Draw bars and labels
    data.forEach((item, index) => {
      const y = padding.top + index * (barHeight + barSpacing) + barSpacing / 2
      const barWidth = (item.value / maxValue) * chartWidth

      // Draw bar
      ctx.fillStyle = "#0ea5e9"
      ctx.fillRect(padding.left, y, barWidth, barHeight)

      // Draw product name
      ctx.fillStyle = "#334155"
      ctx.textAlign = "right"
      ctx.font = "14px sans-serif"
      ctx.fillText(item.name, padding.left - 10, y + barHeight / 2 + 5)

      // Draw value on bar
      ctx.fillStyle = "#ffffff"
      ctx.textAlign = "left"
      ctx.fillText(item.value.toString(), padding.left + barWidth - 30, y + barHeight / 2 + 5)
    })
  }, [])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} width={800} height={300} className="w-full h-full" />
    </div>
  )
}
