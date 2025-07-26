import { createContext, useContext, JSX } from 'solid-js';
import { createUniqueId } from 'solid-js/web';
import * as LabelPrimitive from '@radix-ui/react-label'; // Note: Radix UI components are React-specific and will not work directly in SolidJS without a Solid port or wrapper.
import { Slot } from '@radix-ui/react-slot'; // Note: Radix UI components are React-specific and will not work directly in SolidJS without a Solid port or wrapper.
import {
  Controller, // Note: react-hook-form is React-specific and will not work directly in SolidJS.
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormItem = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const id = createUniqueId();
  const { class: className, ref, ...rest } = props;

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} class={cn('space-y-2', className)} {...rest} />
    </FormItemContext.Provider>
  );
};

const FormLabel = (props: JSX.HTMLAttributes<HTMLLabelElement> & { htmlFor?: string }) => {
  const { error, formItemId } = useFormField();
  const { class: className, ref, ...rest } = props;

  return (
    <Label
      ref={ref}
      class={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...rest}
    />
  );
};

const FormControl = (props: JSX.HTMLAttributes<HTMLElement>) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();
  const { ref, ...rest } = props; // class is not used directly on Slot, but can be passed through

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...rest}
    />
  );
};

const FormDescription = (props: JSX.HTMLAttributes<HTMLParagraphElement>) => {
  const { formDescriptionId } = useFormField();
  const { class: className, ref, ...rest } = props;

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      class={cn('text-sm text-muted-foreground', className)}
      {...rest}
    />
  );
};

const FormMessage = (props: JSX.HTMLAttributes<HTMLParagraphElement>) => {
  const { error, formMessageId } = useFormField();
  const { class: className, children, ref, ...rest } = props;
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      class={cn('text-sm font-medium text-destructive', className)}
      {...rest}
    >
      {body}
    </p>
  );
};

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};