import { buttonVariants } from '@/components/ui/button'
import { source } from '@/lib/source'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Page() {
  const tree = source.getPageTree()

  return (
    <div className="scrollbar-track-background scrollbar-thumb-muted scrollbar-thin sticky top-16 -mt-6 flex h-full flex-col gap-4 overflow-auto overflow-x-hidden px-4 pt-12">
      {tree.children.map(item => (
        <div
          key={item.name?.toString()}
          className="space-y-4"
        >
          <h2 className="text-md font-bold">
            {item.name?.toString()}
          </h2>
          {item.type === 'folder' && (
            <ul className="flex flex-col gap-1">
              {item.children.map(node => (
                <Link
                  href={node.type === 'page' ? node.url : '#'}
                  key={node.$id}
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    }),
                    'text-card-foreground/75 -mx-3 justify-start hover:text-card-foreground',
                  )}
                >
                  {node.name?.toString()}
                </Link>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

