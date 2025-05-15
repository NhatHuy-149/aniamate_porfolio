"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"
import { Typography } from "./typography"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, children, ...props }, ref) => (
  <div>
    <div className="flex flex-row justify-between">
      <Typography fontFamily="oswald" color="primary" className="uppercase text-[18px]">
        {children}
      </Typography>
      <Typography fontFamily="oswald" color="primary" className="uppercase text-[18px]">
        {value}%
      </Typography>
    </div>
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-[2px] w-full overflow-hidden rounded-full bg-primary/20",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-background-gradient transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  </div>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
