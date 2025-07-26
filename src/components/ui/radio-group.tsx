import * as RadioGroupPrimitive from '@kobalte/core/radio-group';
import { Circle } from 'lucide-solid';

import { cn } from '@/lib/utils';

const RadioGroup = (props: RadioGroupPrimitive.RadioGroupRootProps) => {
  return (
    <RadioGroupPrimitive.Root
      class={cn('grid gap-2', props.class)}
      {...props}
    />
  );
};

const RadioGroupItem = (props: RadioGroupPrimitive.RadioGroupItemProps) => {
  return (
    <RadioGroupPrimitive.Item
      class={cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator class="flex items-center justify-center">
        <Circle class="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
};

export { RadioGroup, RadioGroupItem };