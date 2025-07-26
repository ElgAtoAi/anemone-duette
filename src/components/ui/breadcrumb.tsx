import { Dynamic } from 'solid-js/web';
import { ChevronRight, MoreHorizontal } from 'lucide-solid';

import { cn } from '@/lib/utils';

const Breadcrumb = (props: {
  ref?: HTMLElement | ((el: HTMLElement) => void);
  separator?: any;
  [key: string]: any;
}) => {
  const { ref, ...rest } = props;
  return <nav ref={ref} aria-label="breadcrumb" {...rest} />;
};

const BreadcrumbList = (props: {
  class?: string;
  ref?: HTMLOListElement | ((el: HTMLOListElement) => void);
  [key: string]: any;
}) => {
  const { class: className, ref, ...rest } = props;
  return (
    <ol
      ref={ref}
      class={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
        className
      )}
      {...rest}
    />
  );
};

const BreadcrumbItem = (props: {
  class?: string;
  ref?: HTMLLIElement | ((el: HTMLLIElement) => void);
  [key: string]: any;
}) => {
  const { class: className, ref, ...rest } = props;
  return (
    <li
      ref={ref}
      class={cn('inline-flex items-center gap-1.5', className)}
      {...rest}
    />
  );
};

const BreadcrumbLink = (props: {
  asChild?: boolean;
  class?: string;
  ref?: HTMLAnchorElement | ((el: HTMLAnchorElement) => void);
  children?: any;
  [key: string]: any;
}) => {
  const { asChild, class: className, ref, children, ...rest } = props;

  if (asChild) {
    return (
      <Dynamic
        component={children}
        ref={ref}
        class={cn('transition-colors hover:text-foreground', className)}
        {...rest}
      />
    );
  } else {
    return (
      <a
        ref={ref}
        class={cn('transition-colors hover:text-foreground', className)}
        {...rest}
      >
        {children}
      </a>
    );
  }
};

const BreadcrumbPage = (props: {
  class?: string;
  ref?: HTMLSpanElement | ((el: HTMLSpanElement) => void);
  [key: string]: any;
}) => {
  const { class: className, ref, ...rest } = props;
  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      class={cn('font-normal text-foreground', className)}
      {...rest}
    />
  );
};

const BreadcrumbSeparator = (props: {
  children?: any;
  class?: string;
  [key: string]: any;
}) => {
  const { children, class: className, ...rest } = props;
  return (
    <li
      role="presentation"
      aria-hidden="true"
      class={cn('[&>svg]:size-3.5', className)}
      {...rest}
    >
      {children ?? <ChevronRight />}
    </li>
  );
};

const BreadcrumbEllipsis = (props: {
  class?: string;
  [key: string]: any;
}) => {
  const { class: className, ...rest } = props;
  return (
    <span
      role="presentation"
      aria-hidden="true"
      class={cn('flex h-9 w-9 items-center justify-center', className)}
      {...rest}
    >
      <MoreHorizontal class="h-4 w-4" />
      <span class="sr-only">More</span>
    </span>
  );
};

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};