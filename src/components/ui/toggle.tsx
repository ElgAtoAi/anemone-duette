import type { Component, JSX } from 'solid-js';
import { splitProps } from 'solid-js';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Assuming TogglePrimitive.Root would accept standard button attributes and its own specific ones.
// This type definition is a placeholder for what a Solid-native TogglePrimitive.Root would expose.
type TogglePrimitiveRootProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  // Add any specific props that Radix's TogglePrimitive.Root might have,
  // e.g., `pressed`, `onPressedChange`, `value`, etc.
  // Since the original component uses `ComponentPropsWithoutRef`, we infer it takes all props
  // of the primitive, so we include a generic spread for them.
  // The `data-[state=on]` implies internal state management, which is handled by the primitive.
};

type ToggleProps = TogglePrimitiveRootProps &
  VariantProps<typeof toggleVariants> & {
    class?: string;
    ref?: (el: HTMLButtonElement) => void;
  };

const Toggle: Component<ToggleProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'variant', 'size', 'ref']);

  return (
    <TogglePrimitive.Root
      ref={local.ref}
      class={cn(toggleVariants({ variant: local.variant, size: local.size, className: local.class }))}
      {...rest}
    />
  );
};

// displayName is not typically used in SolidJS but can be kept for consistency if desired.
(Toggle as any).displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };