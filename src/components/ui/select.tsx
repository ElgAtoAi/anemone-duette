import * as SelectPrimitive from '@kobalte/core/select';
import { Check, ChevronDown, ChevronUp } from 'lucide-solid';

import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = (props: SelectPrimitive.SelectTriggerProps) => {
  const { class: className, children, ...rest } = props;
  return (
    <SelectPrimitive.Trigger
      class={cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        className
      )}
      {...rest}
    >
      {children}
      <SelectPrimitive.Icon>
        <ChevronDown class="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

const SelectScrollUpButton = (props: SelectPrimitive.SelectScrollUpButtonProps) => {
  const { class: className, ...rest } = props;
  return (
    <SelectPrimitive.ScrollUpButton
      class={cn(
        'flex cursor-default items-center justify-center py-1',
        className
      )}
      {...rest}
    >
      <ChevronUp class="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  );
};

const SelectScrollDownButton = (props: SelectPrimitive.SelectScrollDownButtonProps) => {
  const { class: className, ...rest } = props;
  return (
    <SelectPrimitive.ScrollDownButton
      class={cn(
        'flex cursor-default items-center justify-center py-1',
        className
      )}
      {...rest}
    >
      <ChevronDown class="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  );
};

const SelectContent = (props: SelectPrimitive.SelectContentProps) => {
  const { class: className, children, position = 'popper', ...rest } = props;
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        class={cn(
          'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        {...rest}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          class={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--kb-select-trigger-height)] w-full min-w-[var(--kb-select-trigger-width)]'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

const SelectLabel = (props: SelectPrimitive.SelectLabelProps) => {
  const { class: className, ...rest } = props;
  return (
    <SelectPrimitive.Label
      class={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
      {...rest}
    />
  );
};

const SelectItem = (props: SelectPrimitive.SelectItemProps) => {
  const { class: className, children, ...rest } = props;
  return (
    <SelectPrimitive.Item
      class={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check class="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

const SelectSeparator = (props: SelectPrimitive.SelectSeparatorProps) => {
  const { class: className, ...rest } = props;
  return (
    <SelectPrimitive.Separator
      class={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...rest}
    />
  );
};

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};