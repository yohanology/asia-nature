import { cloneElement, isValidElement, type ReactElement, type ButtonHTMLAttributes } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  withDownArrow?: boolean;
  asChild?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  withDownArrow = false,
  asChild = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F4F3E] disabled:opacity-50 disabled:cursor-not-allowed rounded-sm';
  const variants = {
    primary: 'bg-[#2F4F3E] text-white hover:bg-[#3E6350] border border-transparent shadow-sm',
    outline: 'bg-transparent text-[#2F4F3E] border border-[#2F4F3E] hover:bg-[#2F4F3E] hover:text-white',
    ghost: 'bg-transparent text-[#2F4F3E] hover:bg-[#2F4F3E]/10',
    white: 'bg-white text-[#2F4F3E] hover:bg-[#F9F8F6] border border-transparent shadow-sm'
  };
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4'
  };
  const mergedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();
  const content = <>
    {children}
    {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    {withDownArrow && <ArrowDown className="ml-2 h-4 w-4" />}
  </>;

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string; children?: React.ReactNode }>;
    return cloneElement(child, {
      className: `${mergedClassName} ${child.props.className ?? ''}`.trim(),
      children: <>
        {child.props.children}
        {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
        {withDownArrow && <ArrowDown className="ml-2 h-4 w-4" />}
      </>
    });
  }

  return <button className={mergedClassName} {...props}>
    {content}
  </button>;
}
