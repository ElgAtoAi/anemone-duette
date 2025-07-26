import { Component, ComponentProps } from "solid-js"

import { cn } from "@/lib/utils"

type CardProps = ComponentProps<"div">
const Card: Component<CardProps> = (props) => (
  <div
    ref={props.ref}
    class={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      props.class
    )}
    {...props}
  />
)

type CardHeaderProps = ComponentProps<"div">
const CardHeader: Component<CardHeaderProps> = (props) => (
  <div
    ref={props.ref}
    class={cn("flex flex-col space-y-1.5 p-6", props.class)}
    {...props}
  />
)

type CardTitleProps = ComponentProps<"h3">
const CardTitle: Component<CardTitleProps> = (props) => (
  <h3
    ref={props.ref}
    class={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      props.class
    )}
    {...props}
  />
)

type CardDescriptionProps = ComponentProps<"p">
const CardDescription: Component<CardDescriptionProps> = (props) => (
  <p
    ref={props.ref}
    class={cn("text-sm text-muted-foreground", props.class)}
    {...props}
  />
)

type CardContentProps = ComponentProps<"div">
const CardContent: Component<CardContentProps> = (props) => (
  <div ref={props.ref} class={cn("p-6 pt-0", props.class)} {...props} />
)

type CardFooterProps = ComponentProps<"div">
const CardFooter: Component<CardFooterProps> = (props) => (
  <div
    ref={props.ref}
    class={cn("flex items-center p-6 pt-0", props.class)}
    {...props}
  />
)

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }