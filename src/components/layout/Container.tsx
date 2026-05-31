import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Container({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-(--container-max) px-(--container-padding)", className)}
      {...props}
    >
      {children}
    </div>
  );
}
