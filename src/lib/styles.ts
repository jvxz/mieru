const interactiveStyles = {
  base: 'focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[3px] active:ring-ring/20 aria-invalid:ring-destructive/20 aria-invalid:border-destructive dark:aria-invalid:ring-destructive/40 inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded text-base whitespace-nowrap transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
  variant: {
    default: 'bg-secondary/50 border-border/60 text-secondary-foreground border shadow hover:border-primary/20 active:border-primary/35',
    destructive: 'bg-destructive/90 text-destructive-foreground shadow hover:bg-destructive active:bg-destructive/90',
    outline: 'border-border/60 border bg-transparent hover:bg-secondary/50 hover:border-primary/20 active:border-primary/35',
    ghost: 'hover:bg-secondary active:bg-secondary/80',
    link: 'text-primary underline-offset-4 hover:underline',
  },
  size: {
    default: 'h-8 px-3 py-1.5 text-base',
    sm: 'h-7 rounded px-2.5 py-1 text-sm',
    lg: 'h-10 rounded px-5 text-base text-lg',
    icon: 'aspect-square size-8',
  },
}

export { interactiveStyles }
