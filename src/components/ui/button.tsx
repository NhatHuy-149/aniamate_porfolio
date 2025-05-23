import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Typography } from "./typography"

const buttonVariants = cva(
  "group relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium hover:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-background text-primary-foreground  ",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[48px] px-[42px] has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className}))}
      {...props}
    >
      <span className="absolute top-0 left-0 w-full h-full  border-primary border-2"></span> 
      <span className="absolute left-0 top-[-150%] w-full h-[300%] bg-background-gradient translate-x-[-105%] rotate-[25deg] transition-all duration-500 group-hover:top-[-100%] group-hover:rotate-[0deg] group-hover:translate-x-0 "></span> 
      <Typography variant="span" className="relative z-10 uppercase" fontFamily="oswald"  >{children}</Typography> 
    </Comp>
  )
}

export { Button, buttonVariants }
