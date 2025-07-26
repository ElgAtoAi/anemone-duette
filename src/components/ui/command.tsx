import { forwardRef } from 'solid-js';
import type { ComponentProps, JSX } from 'solid-js';
import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-solid';

import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Command = forwardRef<
  any, // Replaced React.ElementRef<typeof CommandPrimitive>
  ComponentProps<any> // Replaced React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ class: className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    class={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent class="overflow-hidden p-0 shadow-lg">
        <Command class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = forwardRef<
  any, // Replaced React.ElementRef<typeof CommandPrimitive.Input>
  ComponentProps<any> // Replaced React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ class: className, ...props }, ref) => (
  <div class="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      class={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = forwardRef<
  any, // Replaced React.ElementRef<typeof CommandPrimitive.List>
  ComponentProps<any> // Replaced React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ class: className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    class={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = forwardRef<
  any, // Replaced React.ElementRef<typeof CommandPrimitive.Empty>
  ComponentProps<any> // Replaced React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    class="py-6 text-center text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = forwardRef<
  any, // Replaced React.ElementRef<typeof CommandPrimitive.Group>
  ComponentProps<any> // Replaced React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ class: className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    class={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = forwardRef<
  any, // Replaced React.ElementRef<typeof CommandPrimitive.Separator>
  ComponentProps<any> // Replaced React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ class: className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    class={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = forwardRef<
  any, // Replaced React.ElementRef<typeof CommandPrimitive.Item>
  ComponentProps<any> // Replaced React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ class: className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    class={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  class: className,
  ...props
}: JSX.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      class={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};