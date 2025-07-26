import type { JSX } from 'solid-js';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface AlertProps extends JSX.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  ref?: HTMLDivElement | ((el: HTMLDivElement) => void);
}

const Alert = (props: AlertProps) => {
  const { class: className, variant, ref, ...rest } = props;
  return (
    <div
      ref={ref}
      role="alert"
      class={cn(alertVariants({ variant }), className)}
      {...rest}
    />
  );
};
Alert.displayName = 'Alert';

interface AlertTitleProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
  ref?: HTMLParagraphElement | ((el: HTMLParagraphElement) => void);
}

const AlertTitle = (props: AlertTitleProps) => {
  const { class: className, ref, ...rest } = props;
  return (
    <h5
      ref={ref}
      class={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...rest}
    />
  );
};
AlertTitle.displayName = 'AlertTitle';

interface AlertDescriptionProps extends JSX.HTMLAttributes<HTMLParagraphElement> {
  ref?: HTMLParagraphElement | ((el: HTMLParagraphElement) => void);
}

const AlertDescription = (props: AlertDescriptionProps) => {
  const { class: className, ref, ...rest } = props;
  return (
    <div
      ref={ref}
      class={cn('text-sm [&_p]:leading-relaxed', className)}
      {...rest}
    />
  );
};
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };