"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          `
          flex w-full rounded-md 
          border border-[#1E40AF]/40  
          bg-white px-3 py-2 text-sm shadow-sm text-foreground
          transition-all
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30
          focus-visible:border-[#1E40AF]/60

          hover:border-[#1E40AF]/60
          placeholder:text-muted-foreground
          disabled:cursor-not-allowed disabled:opacity-50

          min-h-[100px] resize-none
        `,
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };