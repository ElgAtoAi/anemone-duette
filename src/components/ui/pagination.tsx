import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-solid'; // Changed from lucide-react to lucide-solid

import { cn } from '@/lib/utils';
import { ButtonProps, buttonVariants } from '@/components/ui/button';
import { JSX } from 'solid-js'; // Import JSX for intrinsic elements types

const Pagination = ({ class: className, ...props }: JSX.IntrinsicElements['nav']) => (
  <nav
    role="navigation"
    aria-label="pagination"
    class={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);

const PaginationContent = ({ class: className, ref, ...props }: JSX.IntrinsicElements['ul']) => (
  <ul
    ref={ref}
    class={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
);

const PaginationItem = ({ class: className, ref, ...props }: JSX.IntrinsicElements['li']) => (
  <li ref={ref} class={cn('', className)} {...props} />
);

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  JSX.IntrinsicElements['a']; // Changed from React.ComponentProps<'a'>

const PaginationLink = ({
  class: className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    class={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
      }),
      className
    )}
    {...props}
  />
);

const PaginationPrevious = ({
  class: className,
  ...props
}: PaginationLinkProps) => ( // Changed from React.ComponentProps<typeof PaginationLink>
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    class={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft class="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);

const PaginationNext = ({
  class: className,
  ...props
}: PaginationLinkProps) => ( // Changed from React.ComponentProps<typeof PaginationLink>
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    class={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight class="h-4 w-4" />
  </PaginationLink>
);

const PaginationEllipsis = ({
  class: className,
  ...props
}: JSX.IntrinsicElements['span']) => ( // Changed from React.ComponentProps<'span'>
  <span
    aria-hidden
    class={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal class="h-4 w-4" />
    <span class="sr-only">More pages</span>
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};