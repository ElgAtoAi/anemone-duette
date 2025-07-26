import * as MenubarPrimitive from '@kobalte/core/menubar';
import { Check, ChevronRight, Circle } from 'lucide-solid';

import { cn } from '@/lib/utils';
import type { JSX } from 'solid-js';

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = (props: MenubarPrimitive.MenubarRootProps) => {
  const { class: className, ...rest } = props;
  return (
    <MenubarPrimitive.Root
      class={cn(
        'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',
        className
      )}
      {...rest}
    />
  );
};

const MenubarTrigger = (props: MenubarPrimitive.MenubarTriggerProps) => {
  const { class: className, ...rest } = props;
  return (
    <MenubarPrimitive.Trigger
      class={cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        className
      )}
      {...rest}
    />
  );
};

interface MenubarSubTriggerProps extends MenubarPrimitive.MenubarSubTriggerProps {
  inset?: boolean;
}

const MenubarSubTrigger = (props: MenubarSubTriggerProps) => {
  const { class: className, inset, children, ...rest } = props;
  return (
    <MenubarPrimitive.SubTrigger
      class={cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        inset && 'pl-8',
        className
      )}
      {...rest}
    >
      {children}
      <ChevronRight class="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  );
};

const MenubarSubContent = (props: MenubarPrimitive.MenubarSubContentProps) => {
  const { class: className, ...rest } = props;
  return (
    <MenubarPrimitive.SubContent
      class={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...rest}
    />
  );
};

const MenubarContent = (props: MenubarPrimitive.MenubarContentProps) => {
  const { class: className, align = 'start', alignOffset = -4, sideOffset = 8, ...rest } = props;
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        class={cn(
          'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...rest}
      />
    </MenubarPrimitive.Portal>
  );
};

interface MenubarItemProps extends MenubarPrimitive.MenubarItemProps {
  inset?: boolean;
}

const MenubarItem = (props: MenubarItemProps) => {
  const { class: className, inset, ...rest } = props;
  return (
    <MenubarPrimitive.Item
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...rest}
    />
  );
};

const MenubarCheckboxItem = (props: MenubarPrimitive.MenubarCheckboxItemProps) => {
  const { class: className, children, checked, ...rest } = props;
  return (
    <MenubarPrimitive.CheckboxItem
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      checked={checked}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Check class="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
};

const MenubarRadioItem = (props: MenubarPrimitive.MenubarRadioItemProps) => {
  const { class: className, children, ...rest } = props;
  return (
    <MenubarPrimitive.RadioItem
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Circle class="h-2 w-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
};

interface MenubarLabelProps extends MenubarPrimitive.MenubarLabelProps {
  inset?: boolean;
}

const MenubarLabel = (props: MenubarLabelProps) => {
  const { class: className, inset, ...rest } = props;
  return (
    <MenubarPrimitive.Label
      class={cn(
        'px-2 py-1.5 text-sm font-semibold',
        inset && 'pl-8',
        className
      )}
      {...rest}
    />
  );
};

const MenubarSeparator = (props: MenubarPrimitive.MenubarSeparatorProps) => {
  const { class: className, ...rest } = props;
  return (
    <MenubarPrimitive.Separator
      class={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...rest}
    />
  );
};

const MenubarShortcut = (props: JSX.HTMLAttributes<HTMLSpanElement>) => {
  const { class: className, ...rest } = props;
  return (
    <span
      class={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className
      )}
      {...rest}
    />
  );
};

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};