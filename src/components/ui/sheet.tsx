import { Dialog } from '@kobalte/core/dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-solid';

import { cn } from '@/lib/utils';
import type { ComponentProps, JSX } from 'solid-js';

const Sheet = Dialog.Root;

const SheetTrigger = Dialog.Trigger;

const SheetClose = Dialog.CloseButton;

const SheetPortal = Dialog.Portal;

const SheetOverlay = (props: ComponentProps<typeof Dialog.Overlay>) => {
  const { class: className, ...rest } = props;
  return (
    <Dialog.Overlay
      class={cn(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...rest}
    />
  );
};

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

interface SheetContentProps
  extends ComponentProps<typeof Dialog.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = (props: SheetContentProps) => {
  const { side = 'right', class: className, children, ...rest } = props;

  return (
    <SheetPortal>
      <SheetOverlay />
      <Dialog.Content
        class={cn(sheetVariants({ side }), className)}
        {...rest}
      >
        {children}
        <Dialog.CloseButton class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X class="h-4 w-4" />
          <span class="sr-only">Close</span>
        </Dialog.CloseButton>
      </Dialog.Content>
    </SheetPortal>
  );
};

const SheetHeader = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div
    class={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      props.class
    )}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div
    class={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      props.class
    )}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = (props: ComponentProps<typeof Dialog.Title>) => {
  const { class: className, ...rest } = props;
  return (
    <Dialog.Title
      class={cn('text-lg font-semibold text-foreground', className)}
      {...rest}
    />
  );
};

const SheetDescription = (props: ComponentProps<typeof Dialog.Description>) => {
  const { class: className, ...rest } = props;
  return (
    <Dialog.Description
      class={cn('text-sm text-muted-foreground', className)}
      {...rest}
    />
  );
};

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};