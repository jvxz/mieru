'use client'
import { Button } from '@/components/ui/button'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useState } from 'react'

function SearchDialog() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <Button
        className="text-muted-foreground flex w-48 items-center justify-between px-2"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-1">
          <Icon
            icon="mingcute:search-line"
            strokeWidth={0.5}
          />
          Search
        </div>
        <CommandShortcut className="text-muted-foreground text-xs">
          ⌘ K
        </CommandShortcut>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
      >
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}

export { SearchDialog }
