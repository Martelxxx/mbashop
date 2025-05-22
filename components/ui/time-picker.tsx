"use client"

import * as React from "react"
import { format } from "date-fns"
import { Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

interface TimePickerProps {
  date?: Date
  setDate: (date: Date) => void
}

export function TimePicker({ date, setDate }: TimePickerProps) {
  const [selectedTime, setSelectedTime] = React.useState<string>(date ? format(date, "HH:mm") : "12:00")

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(e.target.value)

    if (date) {
      const [hours, minutes] = e.target.value.split(":")
      const newDate = new Date(date)
      newDate.setHours(Number.parseInt(hours, 10))
      newDate.setMinutes(Number.parseInt(minutes, 10))
      setDate(newDate)
    } else {
      const newDate = new Date()
      const [hours, minutes] = e.target.value.split(":")
      newDate.setHours(Number.parseInt(hours, 10))
      newDate.setMinutes(Number.parseInt(minutes, 10))
      setDate(newDate)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <Clock className="mr-2 h-4 w-4" />
          {date ? format(date, "HH:mm") : <span>Pick a time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <div className="space-y-2">
          <h4 className="font-medium">Select time</h4>
          <Input type="time" value={selectedTime} onChange={handleTimeChange} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
