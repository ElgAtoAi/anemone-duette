import { Slider as SliderPrimitive } from '@kobalte/core/slider';
import type { SliderRootProps } from '@kobalte/core/slider';

import { cn } from '@/lib/utils';

const Slider = (props: SliderRootProps) => {
  const { class: incomingClass, ref, ...rest } = props;

  return (
    <SliderPrimitive.Root
      ref={ref}
      class={cn(
        'relative flex w-full touch-none select-none items-center',
        incomingClass
      )}
      {...rest}
    >
      <SliderPrimitive.Track class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range class="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  );
};

export { Slider };