import { Component, JSX } from 'solid-js';
import * as ScrollAreaPrimitive from '@kobalte/core/scroll-area';

import { cn } from '@/lib/utils';

type ScrollAreaProps = ScrollAreaPrimitive.ScrollAreaRootProps & {
  class?: string;
};

const ScrollArea: Component<ScrollAreaProps> = (props) => {
  const { class: className, children, ...rest } = props;

  return (
    <ScrollAreaPrimitive.Root
      class={cn('relative overflow-hidden', className)}
      {...rest}
    >
      <ScrollAreaPrimitive.Viewport class="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};

type ScrollBarProps = ScrollAreaPrimitive.ScrollAreaScrollbarProps & {
  class?: string;
};

const ScrollBar: Component<ScrollBarProps> = (props) => {
  const { class: className, orientation = 'vertical', ...rest } = props;

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      orientation={orientation}
      class={cn(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' &&
          'h-full w-2.5 border-l border-l-transparent p-[1px]',
        orientation === 'horizontal' &&
          'h-2.5 flex-col border-t border-t-transparent p-[1px]',
        className
      )}
      {...rest}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
};

export { ScrollArea, ScrollBar };