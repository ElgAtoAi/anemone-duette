import { Popover as PopoverPrimitive } from '@kobalte/core/popover';

import { cn } from '@/lib/utils';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = (props: {
  class?: string;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  ref?: (el: HTMLElement) => void;
  [key: string]: any;
}) => {
  const { class: className, align = 'center', sideOffset = 4, ...rest } = props;

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={props.ref}
        align={align}
        sideOffset={sideOffset}
        class={cn(
          'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...rest}
      />
    </PopoverPrimitive.Portal>
  );
};

export { Popover, PopoverTrigger, PopoverContent };