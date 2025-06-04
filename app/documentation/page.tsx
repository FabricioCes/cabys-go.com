import DocsSection from "@/components/DocsSection"

export default function DocumentationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">API Documentation</h1>
        <p className="text-xl text-muted-foreground">Complete guide to using the CABYS API GO service</p>
      </div>

      <DocsSection />
    </div>
  )
}
