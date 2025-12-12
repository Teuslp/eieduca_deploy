"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          `
          flex h-9 w-full rounded-md 
          border border-[#1E40AF]/40  
          bg-white px-3 py-2 text-sm shadow-sm text-foreground
          transition-all
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30
          focus-visible:border-[#1E40AF]/60

          hover:border-[#1E40AF]/60
          placeholder:text-muted-foreground

          disabled:cursor-not-allowed disabled:opacity-50
        `,
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }