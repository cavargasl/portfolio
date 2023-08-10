import { cn } from "@/lib/utils"
import { Content, Group, Item, ItemIndicator, ItemText, Label, Portal, Root, Separator, Trigger, Value, Viewport } from "@radix-ui/react-select"
import { forwardRef, type ReactElement } from "react"
import { IconClose } from "../Icons"

const Select = Root

const SelectGroup = Group

const SelectValue = Value

const SelectTrigger = forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger> & { iconSelect?: ReactElement }
>(({ className, children, iconSelect, ...props }, ref) => {
  return (
    <Trigger
      ref={ref}
      aria-controls="radix-:Rp9mj9:"
      className={cn(
        "flex h-10 w-full items-center justify-between gap-1 rounded-sm bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      {iconSelect}
    </Trigger>
  )
})
SelectTrigger.displayName = "SelectTrigger"


const SelectContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, position = "popper", ...props }, ref) => {
  function getTranslate() {
    switch (props.side) {
      case "top": return "translate-y-[-1px]"
      case "bottom": return "translate-y-1"
      case "left": return "translate-x-[-1px]"
      case "right": return "translate-x-1"
      default: return ""
    }
  }
  return (
    <Portal>
      <Content
        ref={ref}
        className={cn(
          "relative z-50 overflow-hidden rounded-sm border text-foreground shadow-md",
          position === "popper" && getTranslate(),
          className
        )}
        position={position}
        {...props}
      >
        <Viewport
          className={cn(
            "px-3 py-2",
            position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </Viewport>
      </Content>
    </Portal>
  )
})
SelectContent.displayName = Content.displayName

const SelectLabel = forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = Label.displayName

const SelectItem = forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, children, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-secondary focus:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <IconClose className="h-4 w-4" />
      </ItemIndicator>
    </span>

    <ItemText>{children}</ItemText>
  </Item>
))
SelectItem.displayName = Item.displayName

const SelectSeparator = forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px", className)}
    {...props}
  />
))
SelectSeparator.displayName = Separator.displayName

export {
  Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue
}

