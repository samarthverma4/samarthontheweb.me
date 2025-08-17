import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        minimal: "bg-background text-foreground border border-border hover:bg-card transition-colors",
        inverse: "bg-foreground text-background hover:bg-foreground/90",
        electric: "bg-gradient-electric text-void hover:shadow-glow transition-all duration-300 font-semibold",
        cyber: "bg-gradient-cyber text-void hover:shadow-cyber transition-all duration-300 font-semibold",
        void: "bg-void text-ghost border border-electric/30 hover:border-electric hover:shadow-glow transition-all duration-300",
        floating: "bg-card/80 backdrop-blur-sm text-card-foreground border border-border/50 hover:border-electric/50 hover:shadow-glow transition-all duration-300"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        xl: "h-14 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)