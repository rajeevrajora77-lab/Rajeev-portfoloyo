import * as React from 'react';
import { cn } from '@/lib/utils';

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { open, setOpen })
          : child
      )}
    </div>
  );
};

const DropdownMenuTrigger = ({
  asChild,
  children,
  open,
  setOpen,
}: {
  asChild?: boolean;
  children: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}) => {
  const handleClick = () => setOpen?.(!open);
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: handleClick,
    });
  }
  
  return <button onClick={handleClick}>{children}</button>;
};

const DropdownMenuContent = ({
  className,
  children,
  open,
  setOpen,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}) => {
  if (!open) return null;
  
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setOpen?.(false)} />
      <div
        className={cn(
          'absolute right-0 mt-2 w-48 rounded-md bg-popover p-1 shadow-lg z-50',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

const DropdownMenuItem = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex items-center px-3 py-2 text-sm rounded-sm cursor-pointer hover:bg-accent',
      className
    )}
    {...props}
  />
);

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
};