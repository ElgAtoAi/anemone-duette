import type { Component, ComponentProps } from 'solid-js';
import { Checkbox as KobalteCheckbox } from '@kobalte/core';
import { Check } from 'lucide-solid';

import { cn } from '@/lib/utils';

type CheckboxProps = ComponentProps<typeof KobalteCheckbox.Root>;

const Checkbox: Component<CheckboxProps> = (props) => {
  const { class: className, ref, ...rest } = props;

  return (
    <KobalteCheckbox.Root
      ref={ref}
      class={cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        className
      )}
      {...rest}
    >
      <KobalteCheckbox.Indicator
        class={cn('flex items-center justify-center text-current')}
      >
        <Check class="h-4 w-4" />
      </KobalteCheckbox.Indicator>
    </KobalteCheckbox.Root>
  );
};

export { Checkbox };