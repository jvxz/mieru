export default function Layout({
  children,
  nav,
  aside,
}: {
  children: React.ReactNode
  nav: React.ReactNode
  aside: React.ReactNode
}) {
  return (
    <main className="flex h-full flex-1">
      <div className="grid grid-cols-[1fr_4fr] gap-6">
        {nav}
        <div className="flex flex-1 gap-6">
          {children}
          {aside}
        </div>
      </div>
    </main>
  )
}
