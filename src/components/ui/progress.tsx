import { cn } from '@/lib/utils';
import * as ProgressPrimitive from '@radix-ui/react-progress';

const Progress = (props: {
  class?: string;
  value?: number;
  ref?: (el: HTMLElement) => void;
  [key: string]: any; // For other props passed to ProgressPrimitive.Root
}) => {
  const { class: className, value, ref, ...rest } = props;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      class={cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
        className
      )}
      {...rest}
    >
      <ProgressPrimitive.Indicator
        class="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
};

export { Progress };