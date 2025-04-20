import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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
export { InteractiveExamples, StaticExamples }

