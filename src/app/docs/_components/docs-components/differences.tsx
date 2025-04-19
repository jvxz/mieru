import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

function StaticExamples() {
  return (
    <Alert className="mb-8">
      <svg className="icon-[ph--warning] size-4"></svg>
      <AlertTitle>Example</AlertTitle>
      <AlertDescription>
        <p className="!mb-0">This is an example of a static component.</p>
      </AlertDescription>
    </Alert>
  )
}

function InteractiveExamples() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button>Interactive</Button>
    </div>
  )
}
export { InteractiveExamples, StaticExamples }

