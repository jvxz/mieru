export default function Page() {
  return (
    <div className="flex h-full w-full">
      <div className="w-1/5 border-x">nav</div>
      <div className="grow">content</div>
      <div className="w-1/5 border-x">sidebar</div>
    </div>
  )
}
