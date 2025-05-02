
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#000222]/80 border border-white/5", className)}
      {...props}
    />
  )
}

export { Skeleton }
