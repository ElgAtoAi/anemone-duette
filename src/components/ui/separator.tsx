import { Component, ComponentProps } from 'solid-js';
import * as SeparatorPrimitive from '@radix-ui/solid-separator';

import { cn } from '@/lib/utils';

const Separator: Component<ComponentProps<typeof SeparatorPrimitive.Root>> = (props) => {
  const { class: className, orientation = 'horizontal', decorative = true, ...rest } = props;

  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      class={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...rest}
    />
  );
};

export { Separator };