import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md text-white shadow-xl shadow-black/50",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
