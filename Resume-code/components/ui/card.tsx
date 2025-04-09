import * as React from "react"

import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div className={cn("rounded-md border bg-card text-card-foreground shadow-sm", className)} ref={ref} {...props} />
))
Card.displayName = "Card"

export { Card }

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => (
  <div className={cn("p-6 pt-0", className)} ref={ref} {...props} />
))

CardContent.displayName = "CardContent"

export { CardContent }

export const BarChart = () => {
  return <div>BarChart Placeholder</div>
}

export const PieChart = () => {
  return <div>PieChart Placeholder</div>
}
