import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { allDocs } from 'contentlayer2/generated'
import Link from 'next/link'

function docsTree() {
  const categories = new Set<string>(allDocs.map(doc => doc.category))

  return Array.from(categories).map((category) => {
    const docs = allDocs.filter(doc => doc.category === category)
    return {
      category,
      docs,
    }
  })
}

function Nav() {
  const tree = docsTree()

  return (
    <div className="flex h-full w-1/5 flex-col gap-4 p-6">
      {tree.map(item => (
        <div
          key={item.category}
          className="space-y-4"
        >
          <h2 className="text-md font-bold">
            {item.category}
          </h2>
          <ul className="flex flex-col">
            {item.docs.map(doc => (
              <Link
                href={`/${doc.url}`}
                key={doc.url}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  '-mx-3 justify-start',
                )}
              >
                {doc.title}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export { Nav }
