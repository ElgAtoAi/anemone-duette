import { useContext, type ComponentProps, type JSX } from 'solid-js';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-solid';

import { cn } from '@/lib/utils';

const InputOTP = (props: ComponentProps<typeof OTPInput>) => {
  return (
    <OTPInput
      ref={props.ref}
      containerClass={cn(
        'flex items-center gap-2 has-[:disabled]:opacity-50',
        props.containerClass
      )}
      class={cn('disabled:cursor-not-allowed', props.class)}
      {...props}
    />
  );
};

const InputOTPGroup = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div ref={props.ref} class={cn('flex items-center', props.class)} {...props} />
  );
};

const InputOTPSlot = (props: JSX.HTMLAttributes<HTMLDivElement> & { index: number }) => {
  const inputOTPContext = useContext(OTPInputContext);
  const slotData = inputOTPContext.slots[props.index];

  return (
    <div
      ref={props.ref}
      class={cn(
        'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
        slotData.isActive && 'z-10 ring-2 ring-ring ring-offset-background',
        props.class
      )}
      {...props}
    >
      {slotData.char}
      {slotData.hasFakeCaret && (
        <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div class="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
};

const InputOTPSeparator = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div ref={props.ref} role="separator" {...props}>
      <Dot />
    </div>
  );
};

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };