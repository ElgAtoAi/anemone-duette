import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'solid-js/web';

function Skeleton({
  class: className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      class={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}

export { Skeleton };