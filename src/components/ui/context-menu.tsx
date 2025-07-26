import type { JSX } from 'solid-js';
import * as ContextMenuPrimitive from '@kobalte/core/context-menu';
import { Check, ChevronRight, Circle } from 'lucide-solid';

import { cn } from '@/lib/utils';

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = (
  props: ContextMenuPrimitive.ContextMenuSubTriggerProps & {
    inset?: boolean;
    class?: string;
    children?: JSX.Element;
  }
) => {
  const { class: className, inset, children, ...rest } = props;
  return (
    <ContextMenuPrimitive.SubTrigger
      class={cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        inset && 'pl-8',
        className
      )}
      {...rest}
    >
      {children}
      <ChevronRight class="ml-auto h-4 w-4" />
    </ContextMenuPrimitive.SubTrigger>
  );
};

const ContextMenuSubContent = (
  props: ContextMenuPrimitive.ContextMenuSubContentProps & { class?: string }
) => {
  const { class: className, ...rest } = props;
  return (
    <ContextMenuPrimitive.SubContent
      class={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...rest}
    />
  );
};

const ContextMenuContent = (
  props: ContextMenuPrimitive.ContextMenuContentProps & { class?: string }
) => {
  const { class: className, ...rest } = props;
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        class={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...rest}
      />
    </ContextMenuPrimitive.Portal>
  );
};

const ContextMenuItem = (
  props: ContextMenuPrimitive.ContextMenuItemProps & {
    inset?: boolean;
    class?: string;
  }
) => {
  const { class: className, inset, ...rest } = props;
  return (
    <ContextMenuPrimitive.Item
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...rest}
    />
  );
};

const ContextMenuCheckboxItem = (
  props: ContextMenuPrimitive.ContextMenuCheckboxItemProps & {
    class?: string;
    children?: JSX.Element;
  }
) => {
  const { class: className, children, checked, ...rest } = props;
  return (
    <ContextMenuPrimitive.CheckboxItem
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      checked={checked}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Check class="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
};

const ContextMenuRadioItem = (
  props: ContextMenuPrimitive.ContextMenuRadioItemProps & {
    class?: string;
    children?: JSX.Element;
  }
) => {
  const { class: className, children, ...rest } = props;
  return (
    <ContextMenuPrimitive.RadioItem
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Circle class="h-2 w-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
};

const ContextMenuLabel = (
  props: ContextMenuPrimitive.ContextMenuLabelProps & {
    inset?: boolean;
    class?: string;
  }
) => {
  const { class: className, inset, ...rest } = props;
  return (
    <ContextMenuPrimitive.Label
      class={cn(
        'px-2 py-1.5 text-sm font-semibold text-foreground',
        inset && 'pl-8',
        className
      )}
      {...rest}
    />
  );
};

const ContextMenuSeparator = (
  props: ContextMenuPrimitive.ContextMenuSeparatorProps & { class?: string }
) => {
  const { class: className, ...rest } = props;
  return (
    <ContextMenuPrimitive.Separator
      class={cn('-mx-1 my-1 h-px bg-border', className)}
      {...rest}
    />
  );
};

const ContextMenuShortcut = (
  props: JSX.HTMLAttributes<HTMLSpanElement> & { class?: string }
) => {
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
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};