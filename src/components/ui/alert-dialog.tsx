import type { Component, JSX } from 'solid-js';
import { AlertDialog as AlertDialogPrimitive } from '@kobalte/core/alert-dialog';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay: Component<AlertDialogPrimitive.AlertDialogOverlayProps> = (props) => (
  <AlertDialogPrimitive.Overlay
    class={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      props.class
    )}
    {...props}
  />
);

const AlertDialogContent: Component<AlertDialogPrimitive.AlertDialogContentProps> = (props) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      class={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        props.class
      )}
      {...props}
    />
  </AlertDialogPortal>
);

const AlertDialogHeader: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    class={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      props.class
    )}
    {...props}
  />
);

const AlertDialogFooter: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    class={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      props.class
    )}
    {...props}
  />
);

const AlertDialogTitle: Component<AlertDialogPrimitive.AlertDialogTitleProps> = (props) => (
  <AlertDialogPrimitive.Title
    class={cn('text-lg font-semibold', props.class)}
    {...props}
  />
);

const AlertDialogDescription: Component<AlertDialogPrimitive.AlertDialogDescriptionProps> = (props) => (
  <AlertDialogPrimitive.Description
    class={cn('text-sm text-muted-foreground', props.class)}
    {...props}
  />
);

const AlertDialogAction: Component<AlertDialogPrimitive.AlertDialogActionProps> = (props) => (
  <AlertDialogPrimitive.Action
    class={cn(buttonVariants(), props.class)}
    {...props}
  />
);

const AlertDialogCancel: Component<AlertDialogPrimitive.AlertDialogCancelProps> = (props) => (
  <AlertDialogPrimitive.Cancel
    class={cn(
      buttonVariants({ variant: 'outline' }),
      'mt-2 sm:mt-0',
      props.class
    )}
    {...props}
  />
);

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};