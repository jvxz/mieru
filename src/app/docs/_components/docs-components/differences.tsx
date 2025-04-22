import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

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
      <Button>Interactive</Button>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox" />
        <Label htmlFor="checkbox">Interactive</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch" />
        <Label htmlFor="switch">Interactive</Label>
      </div>
    </div>
  )
}

function PopoverExamples() {
  return (
    <div className="flex items-center justify-center gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="w-80"
        >
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <div
                  className="iconify mr-2 h-4 w-4 opacity-70"
                  data-icon="ph:calendar-blank"
                />
                <span className="text-muted-foreground text-xs">
                  Joined December 2021
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
      <Dialog>
        <DialogTrigger asChild>
          <Button>Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export {
  InteractiveExamples,
  OverlayExamples,
  PopoverExamples,
  StaticExamples,
}

