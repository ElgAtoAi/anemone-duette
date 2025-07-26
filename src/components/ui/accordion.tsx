import { ComponentProps } from 'solid-js/jsx';
import * as AccordionPrimitive from '@radix-ui/solid-accordion';
import { ChevronDown } from 'lucide-solid';

import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>;
const AccordionItem = (props: AccordionItemProps) => (
  <AccordionPrimitive.Item
    {...props}
    class={cn('border-b', props.class)}
  />
);
AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerProps = ComponentProps<typeof AccordionPrimitive.Trigger>;
const AccordionTrigger = (props: AccordionTriggerProps) => {
  const { children, class: localClass, ...rest } = props;
  return (
    <AccordionPrimitive.Header class="flex">
      <AccordionPrimitive.Trigger
        {...rest}
        class={cn(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          localClass
        )}
      >
        {children}
        <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

type AccordionContentProps = ComponentProps<typeof AccordionPrimitive.Content>;
const AccordionContent = (props: AccordionContentProps) => {
  const { children, class: localClass, ...rest } = props;
  return (
    <AccordionPrimitive.Content
      {...rest}
      class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    >
      <div class={cn('pb-4 pt-0', localClass)}>{children}</div>
    </AccordionPrimitive.Content>
  );
};

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };