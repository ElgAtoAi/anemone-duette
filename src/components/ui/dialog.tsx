import * as DialogPrimitive from '@radix-ui/solid-dialog';
import { X } from 'lucide-solid';

import { cn } from '@/lib/utils';
import type { ComponentProps, JSX } from 'solid-js';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = (props: ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay
    class={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      props.class
    )}
    {...props}
  />
);
// DialogOverlay.displayName = DialogPrimitive.Overlay.displayName; // SolidJS does not use displayName in the same way

const DialogContent = (props: ComponentProps<typeof DialogPrimitive.Content>) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      class={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        props.class
      )}
      {...props}
    >
      {props.children}
      <DialogPrimitive.Close class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X class="h-4 w-4" />
        <span class="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
);
// DialogContent.displayName = DialogPrimitive.Content.displayName; // SolidJS does not use displayName in the same way

const DialogHeader = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div
    class={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      props.class
    )}
    {...props}
  />
);
// DialogHeader.displayName = 'DialogHeader'; // SolidJS does not use displayName in the same way

const DialogFooter = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div
    class={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      props.class
    )}
    {...props}
  />
);
// DialogFooter.displayName = 'DialogFooter'; // SolidJS does not use displayName in the same way

const DialogTitle = (props: ComponentProps<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title
    class={cn(
      'text-lg font-semibold leading-none tracking-tight',
      props.class
    )}
    {...props}
  />
);
// DialogTitle.displayName = DialogPrimitive.Title.displayName; // SolidJS does not use displayName in the same way

const DialogDescription = (props: ComponentProps<typeof DialogPrimitive.Description>) => (
  <DialogPrimitive.Description
    class={cn('text-sm text-muted-foreground', props.class)}
    {...props}
  />
);
// DialogDescription.displayName = DialogPrimitive.Description.displayName; // SolidJS does not use displayName in the same way

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};