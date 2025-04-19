import { buttonVariants } from '@/components/ui/button'
import { source } from '@/lib/source'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Page() {
  const tree = source.getPageTree()

  return (
    <div className="flex h-full w-1/5 flex-col gap-4 p-6">
      {tree.children.map(item => (
        <div
          key={item.name?.toString()}
          className="space-y-4"
        >
          <h2 className="text-md font-bold">
            {item.name?.toString()}
          </h2>
          {item.type === 'folder' && (
            <ul className="flex flex-col">
              {item.children.map(node => (
                <Link
                  href={node.type === 'page' ? node.url : '#'}
                  key={node.$id}
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                    }),
                    '-mx-3 justify-start',
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

