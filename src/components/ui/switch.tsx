'use client';

import { Component } from 'solid-js';
import * as SwitchPrimitives from '@kobalte/core/switch';

import { cn } from '@/lib/utils';

interface SwitchProps extends SwitchPrimitives.SwitchRootProps {
  class?: string;
}

const Switch: Component<SwitchProps> = (props) => {
  const { class: className, ...rest } = props;

  return (
    <SwitchPrimitives.Root
      class={cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
        className
      )}
      {...rest}
    >
      <SwitchPrimitives.Thumb
        class={cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
        )}
      />
    </SwitchPrimitives.Root>
  );
};

export { Switch };