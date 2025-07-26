import { ComponentProps, JSX } from 'solid-js';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/lib/utils';

const Drawer = (props: ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={props.shouldScaleBackground ?? true}
    {...props}
  />
);
// Drawer.displayName = 'Drawer'; // Not strictly necessary in SolidJS

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = (props: ComponentProps<typeof DrawerPrimitive.Overlay>) => {
  const { class: className, ...rest } = props;
  return (
    <DrawerPrimitive.Overlay
      class={cn('fixed inset-0 z-50 bg-black/80', className)}
      {...rest}
    />
  );
};
// DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName; // Not strictly necessary in SolidJS

const DrawerContent = (props: ComponentProps<typeof DrawerPrimitive.Content>) => {
  const { class: className, children, ...rest } = props;
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        class={cn(
          'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
          className
        )}
        {...rest}
      >
        <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};
// DrawerContent.displayName = 'DrawerContent'; // Not strictly necessary in SolidJS

const DrawerHeader = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const { class: className, ...rest } = props;
  return (
    <div
      class={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
      {...rest}
    />
  );
};
// DrawerHeader.displayName = 'DrawerHeader'; // Not strictly necessary in SolidJS

const DrawerFooter = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const { class: className, ...rest } = props;
  return (
    <div
      class={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...rest}
    />
  );
};
// DrawerFooter.displayName = 'DrawerFooter'; // Not strictly necessary in SolidJS

const DrawerTitle = (props: ComponentProps<typeof DrawerPrimitive.Title>) => {
  const { class: className, ...rest } = props;
  return (
    <DrawerPrimitive.Title
      class={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className
      )}
      {...rest}
    />
  );
};
// DrawerTitle.displayName = DrawerPrimitive.Title.displayName; // Not strictly necessary in SolidJS

const DrawerDescription = (props: ComponentProps<typeof DrawerPrimitive.Description>) => {
  const { class: className, ...rest } = props;
  return (
    <DrawerPrimitive.Description
      class={cn('text-sm text-muted-foreground', className)}
      {...rest}
    />
  );
};
// DrawerDescription.displayName = DrawerPrimitive.Description.displayName; // Not strictly necessary in SolidJS

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};