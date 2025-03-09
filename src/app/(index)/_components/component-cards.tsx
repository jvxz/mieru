import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

function ComponentCards() {
  return (
    <section className="flex flex-col gap-4">
      <ComponentCardsSearch />
      <article className="grid grid-cols-3 gap-4">
        {Array.from({
          length: 40,
        }).map((_, i) => {
          return (
            <div
              key={i}

              className="flex flex-col gap-2"
            >
              <Card
                className="aspect-square"
              />
              <p className="text-center">{i}</p>
            </div>

          )
        })}
      </article>
    </section>
  )
}

function ComponentCardsSearch() {
  return (
    <Input placeholder="search..." />
  )
}
export { ComponentCards }
