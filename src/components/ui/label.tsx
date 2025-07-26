import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import type { ComponentProps } from "solid-js"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = (props: ComponentProps<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>) => {
  const { className, ...rest } = props;

  return (
    <LabelPrimitive.Root
      class={cn(labelVariants(), className)}
      {...rest}
    />
  );
};

export { Label }