import * as DropdownMenuPrimitive from '@radix-ui/solid-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-solid';

import { cn } from '@/lib/utils';
import { JSX, splitProps } from 'solid-js';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

interface DropdownMenuSubTriggerProps extends DropdownMenuPrimitive.DropdownMenuSubTriggerProps {
  inset?: boolean;
  class?: string;
}

const DropdownMenuSubTrigger = (props: DropdownMenuSubTriggerProps) => {
  const [local, rest] = splitProps(props, ['class', 'inset', 'children']);
  return (
    <DropdownMenuPrimitive.SubTrigger
      class={cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
        local.inset && 'pl-8',
        local.class
      )}
      {...rest}
    >
      {local.children}
      <ChevronRight class="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
};

interface DropdownMenuSubContentProps extends DropdownMenuPrimitive.DropdownMenuSubContentProps {
  class?: string;
}

const DropdownMenuSubContent = (props: DropdownMenuSubContentProps) => {
  const [local, rest] = splitProps(props, ['class']);
  return (
    <DropdownMenuPrimitive.SubContent
      class={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        local.class
      )}
      {...rest}
    />
  );
};

interface DropdownMenuContentProps extends DropdownMenuPrimitive.DropdownMenuContentProps {
  class?: string;
}

const DropdownMenuContent = (props: DropdownMenuContentProps) => {
  const [local, rest] = splitProps(props, ['class', 'sideOffset']);
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={local.sideOffset ?? 4}
        class={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          local.class
        )}
        {...rest}
      />
    </DropdownMenuPrimitive.Portal>
  );
};

interface DropdownMenuItemProps extends DropdownMenuPrimitive.DropdownMenuItemProps {
  inset?: boolean;
  class?: string;
}

const DropdownMenuItem = (props: DropdownMenuItemProps) => {
  const [local, rest] = splitProps(props, ['class', 'inset']);
  return (
    <DropdownMenuPrimitive.Item
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        local.inset && 'pl-8',
        local.class
      )}
      {...rest}
    />
  );
};

interface DropdownMenuCheckboxItemProps extends DropdownMenuPrimitive.DropdownMenuCheckboxItemProps {
  class?: string;
}

const DropdownMenuCheckboxItem = (props: DropdownMenuCheckboxItemProps) => {
  const [local, rest] = splitProps(props, ['class', 'children', 'checked']);
  return (
    <DropdownMenuPrimitive.CheckboxItem
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        local.class
      )}
      checked={local.checked}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check class="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {local.children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

interface DropdownMenuRadioItemProps extends DropdownMenuPrimitive.DropdownMenuRadioItemProps {
  class?: string;
}

const DropdownMenuRadioItem = (props: DropdownMenuRadioItemProps) => {
  const [local, rest] = splitProps(props, ['class', 'children']);
  return (
    <DropdownMenuPrimitive.RadioItem
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        local.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle class="h-2 w-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {local.children}
    </DropdownMenuPrimitive.RadioItem>
  );
};

interface DropdownMenuLabelProps extends DropdownMenuPrimitive.DropdownMenuLabelProps {
  inset?: boolean;
  class?: string;
}

const DropdownMenuLabel = (props: DropdownMenuLabelProps) => {
  const [local, rest] = splitProps(props, ['class', 'inset']);
  return (
    <DropdownMenuPrimitive.Label
      class={cn(
        'px-2 py-1.5 text-sm font-semibold',
        local.inset && 'pl-8',
        local.class
      )}
      {...rest}
    />
  );
};

interface DropdownMenuSeparatorProps extends DropdownMenuPrimitive.DropdownMenuSeparatorProps {
  class?: string;
}

const DropdownMenuSeparator = (props: DropdownMenuSeparatorProps) => {
  const [local, rest] = splitProps(props, ['class']);
  return (
    <DropdownMenuPrimitive.Separator
      class={cn('-mx-1 my-1 h-px bg-muted', local.class)}
      {...rest}
    />
  );
};

interface DropdownMenuShortcutProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  class?: string;
}

const DropdownMenuShortcut = (props: DropdownMenuShortcutProps) => {
  const [local, rest] = splitProps(props, ['class']);
  return (
    <span
      class={cn('ml-auto text-xs tracking-widest opacity-60', local.class)}
      {...rest}
    />
  );
};

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};