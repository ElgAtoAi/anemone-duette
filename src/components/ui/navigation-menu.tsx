import type { Component } from 'solid-js';
import * as NavigationMenuPrimitive from '@kobalte/core/navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-solid';

import { cn } from '@/lib/utils';

const NavigationMenu: Component<NavigationMenuPrimitive.NavigationMenuRootProps> = (props) => {
  const { class: className, children, ...rest } = props;
  return (
    <NavigationMenuPrimitive.Root
      class={cn(
        'relative z-10 flex max-w-max flex-1 items-center justify-center',
        className
      )}
      {...rest}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  );
};

const NavigationMenuList: Component<NavigationMenuPrimitive.NavigationMenuListProps> = (props) => {
  const { class: className, ...rest } = props;
  return (
    <NavigationMenuPrimitive.List
      class={cn(
        'group flex flex-1 list-none items-center justify-center space-x-1',
        className
      )}
      {...rest}
    />
  );
};

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
);

const NavigationMenuTrigger: Component<NavigationMenuPrimitive.NavigationMenuTriggerProps> = (props) => {
  const { class: className, children, ...rest } = props;
  return (
    <NavigationMenuPrimitive.Trigger
      class={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...rest}
    >
      {children}{' '}
      <ChevronDown
        class="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
};

const NavigationMenuContent: Component<NavigationMenuPrimitive.NavigationMenuContentProps> = (props) => {
  const { class: className, ...rest } = props;
  return (
    <NavigationMenuPrimitive.Content
      class={cn(
        'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
        className
      )}
      {...rest}
    />
  );
};

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport: Component<NavigationMenuPrimitive.NavigationMenuViewportProps> = (props) => {
  const { class: className, ...rest } = props;
  return (
    <div class={cn('absolute left-0 top-full flex justify-center')}>
      <NavigationMenuPrimitive.Viewport
        class={cn(
          'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
          className
        )}
        {...rest}
      />
    </div>
  );
};

const NavigationMenuIndicator: Component<NavigationMenuPrimitive.NavigationMenuIndicatorProps> = (props) => {
  const { class: className, ...rest } = props;
  return (
    <NavigationMenuPrimitive.Indicator
      class={cn(
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
        className
      )}
      {...rest}
    >
      <div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
};

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};