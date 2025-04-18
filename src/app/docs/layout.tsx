export default function Layout({ children, nav, aside }: { children: React.ReactNode, nav: React.ReactNode, aside: React.ReactNode }) {
  return (
    <div className="flex h-full">
      {nav}
      <div className="prose flex-1 p-6">
        {children}
      </div>
      {aside}
    </div>
  )
}
