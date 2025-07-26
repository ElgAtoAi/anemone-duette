import { Component, JSX } from 'solid-js';

import { cn } from '@/lib/utils';

const Table: Component<JSX.HTMLAttributes<HTMLTableElement>> = ({ class: className, ref, ...props }) => (
  <div class="relative w-full overflow-auto">
    <table
      ref={ref}
      class={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
);
Table.displayName = 'Table';

const TableHeader: Component<JSX.HTMLAttributes<HTMLTableSectionElement>> = ({ class: className, ref, ...props }) => (
  <thead ref={ref} class={cn('[&_tr]:border-b', className)} {...props} />
);
TableHeader.displayName = 'TableHeader';

const TableBody: Component<JSX.HTMLAttributes<HTMLTableSectionElement>> = ({ class: className, ref, ...props }) => (
  <tbody
    ref={ref}
    class={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
);
TableBody.displayName = 'TableBody';

const TableFooter: Component<JSX.HTMLAttributes<HTMLTableSectionElement>> = ({ class: className, ref, ...props }) => (
  <tfoot
    ref={ref}
    class={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
);
TableFooter.displayName = 'TableFooter';

const TableRow: Component<JSX.HTMLAttributes<HTMLTableRowElement>> = ({ class: className, ref, ...props }) => (
  <tr
    ref={ref}
    class={cn(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className
    )}
    {...props}
  />
);
TableRow.displayName = 'TableRow';

const TableHead: Component<JSX.ThHTMLAttributes<HTMLTableCellElement>> = ({ class: className, ref, ...props }) => (
  <th
    ref={ref}
    class={cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
);
TableHead.displayName = 'TableHead';

const TableCell: Component<JSX.TdHTMLAttributes<HTMLTableCellElement>> = ({ class: className, ref, ...props }) => (
  <td
    ref={ref}
    class={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
);
TableCell.displayName = 'TableCell';

const TableCaption: Component<JSX.HTMLAttributes<HTMLTableCaptionElement>> = ({ class: className, ref, ...props }) => (
  <caption
    ref={ref}
    class={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
);
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};