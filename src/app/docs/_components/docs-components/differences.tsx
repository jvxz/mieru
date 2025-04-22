import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

function StaticExamples() {
  return (
    <Alert>
      <svg className="icon-[ph--info] size-4"></svg>
      <AlertTitle>Example</AlertTitle>
      <AlertDescription>
        <p className="!mb-0">This is an example of a static component.</p>
      </AlertDescription>
    </Alert>
  )
}

function InteractiveExamples() {
  return (
    <div className="flex items-center justify-center gap-6">
      <Button>Button</Button>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox" />
        <Label htmlFor="checkbox">Checkbox</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch" />
        <Label htmlFor="switch">Switch</Label>
      </div>
    </div>
  )
}

function PopoverExamples() {
  return (
    <div className="flex items-center justify-center gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Settings</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Appearance</DropdownMenuItem>
          <DropdownMenuItem>Notifications</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@raycastapp</Button>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="w-66"
        >
          <div className="flex justify-between">
            <Avatar>
              <AvatarImage src="https://github.com/raycast.png" />
              <AvatarFallback>RC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@raycastapp</h4>
              <p className="text-sm">
                Your shortcut to everything.
              </p>
              <div className="flex items-center pt-2">
                <div
                  className="iconify icon-[ph--calendar-blank] text-muted-foreground mr-2 h-4 w-4 opacity-70"
                />
                <span className="text-muted-foreground text-xs">
                  November 2019
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

    </div>
  )
}

function OverlayExamples() {
  return (
    <div className="flex justify-center">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Archive</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Archive project</AlertDialogTitle>
            <AlertDialogDescription>
              This action is irreversible. Your project will be archived
              and all associated resources will be released from your workspace.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className={
              cn(buttonVariants({
                variant: 'destructive',
              }),
                'border-0'
              )
            }>Archive</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export {
  InteractiveExamples,
  OverlayExamples,
  PopoverExamples,
  StaticExamples,
}

