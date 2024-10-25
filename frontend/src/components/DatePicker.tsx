"use client"


import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react"
import { ControllerRenderProps, useForm, useFormContext } from "react-hook-form"

export function DatePickerDemo({handleChanges,fields}:{handleChanges:Function,fields:ControllerRenderProps}) {
  const [date, setDate] = useState<Date>()
  const {setValue} = useFormContext()
  useEffect(()=>{
    setValue('date',date)
  },[date])
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "h-8 rounded w-full p-2 border-0 justify-start text-xs text-left text-[#B6C2CF] bg-neutral-700",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Due Dates</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          
          {...fields}
          mode="single"
          className="bg-neutral-700 text-[#B6C2CF] border-0 outline-none"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
