import { Avatar as AvatarPrimitive } from '@kobalte/core/avatar';

import { cn } from '@/lib/utils';

const Avatar = (props: AvatarPrimitive.AvatarRootProps) => {
  const { class: className, ...rest } = props;
  return (
    <AvatarPrimitive.Root
      class={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...rest}
    />
  );
};

const AvatarImage = (props: AvatarPrimitive.AvatarImageProps) => {
  const { class: className, ...rest } = props;
  return (
    <AvatarPrimitive.Image
      class={cn('aspect-square h-full w-full', className)}
      {...rest}
    />
  );
};

const AvatarFallback = (props: AvatarPrimitive.AvatarFallbackProps) => {
  const { class: className, ...rest } = props;
  return (
    <AvatarPrimitive.Fallback
      class={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        className
      )}
      {...rest}
    />
  );
};

export { Avatar, AvatarImage, AvatarFallback };