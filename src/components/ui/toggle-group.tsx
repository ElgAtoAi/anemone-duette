import { createContext, useContext, type ParentProps } from 'solid-js';
import * as ToggleGroupPrimitive from '@kobalte/core/toggle-group';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { toggleVariants } from '@/components/ui/toggle';

const ToggleGroupContext = createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default',
});

interface ToggleGroupProps extends ToggleGroupPrimitive.ToggleGroupRootProps, VariantProps<typeof toggleVariants> {}

const ToggleGroup = (props: ParentProps<ToggleGroupProps>) => {
  const { class: className, variant, size, children, ...rest } = props;

  return (
    <ToggleGroupPrimitive.Root
      class={cn('flex items-center justify-center gap-1', className)}
      {...rest}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
};

interface ToggleGroupItemProps extends ToggleGroupPrimitive.ToggleGroupItemProps, VariantProps<typeof toggleVariants> {}

const ToggleGroupItem = (props: ParentProps<ToggleGroupItemProps>) => {
  const { class: className, children, variant, size, ...rest } = props;
  const context = useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      class={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...rest}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
};

export { ToggleGroup, ToggleGroupItem };