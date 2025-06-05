import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function DocsSection() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.cabys-go.com"

  const endpoints = [
    {
      method: "GET",
      path: "/api/cabys",
      description: "Get all CABYS codes in a JSON format",
      params: "",
    },
    {
      method: "GET",
      path: "/api/cabys",
      description: "Search CABYS codes by query parameter",
      params: "?query={search_term}",
    },
    {
      method: "GET",
      path: "/api/cabys/:id",
      description: "Get specific CABYS code by ID",
      params: "",
    }
  ]

  const response = {
    id: "0161001010000",
    description: "Café cereza, orgánico",
    tax_percent: 0.01,
  };


  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            This is and API documentation for get CABYS codes and their corresponding tax percentages in Costa Rica.
            You can use this API to search for specific CABYS codes or retrieve details about a particular code.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Each CABYS code represents a specific product or service category and includes the corresponding tax
            percentage that applies to transactions involving those items.
          </p>
        </CardContent>
      </Card>

      {/* Base URL */}
      <Card>
        <CardHeader>
          <CardTitle>Base URL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md font-mono text-sm">{baseUrl}</div>
        </CardContent>
      </Card>

      {/* Endpoints */}
      <Card>
        <CardHeader>
          <CardTitle>API Endpoints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {endpoints.map((endpoint, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center space-x-3">
                <Badge variant={endpoint.method === "GET" ? "default" : "secondary"}>{endpoint.method}</Badge>
                <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                  {endpoint.path}
                  {endpoint.params}
                </code>
              </div>
              <p className="text-muted-foreground text-sm ml-16">{endpoint.description}</p>
              {index < endpoints.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Example Requests</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-semibold">Search for coffee-related products:</h4>
            <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
              curl -X GET &quot;{baseUrl}/api/cabys?query=café&quot;
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h4 className="font-semibold">Get specific CABYS code:</h4>
            <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
              curl -X GET &quot;{baseUrl}/api/cabys/1010101000&quot;
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h4 className="font-semibold">Example Response:</h4>
            <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto whitespace-pre-wrap">
              {JSON.stringify(response, null, 2)}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* License and Footer */}
      <Card>
        <CardHeader>
          <CardTitle>License & Attribution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            This API provides access to official CABYS data for educational and commercial purposes. Please ensure
            compliance with local regulations when using this data for business applications.
          </p>
          <Separator />
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Built by <span className="font-semibold"><Link href="https://www.linkedin.com/in/fabriciocg/" target="_blank">Fabricio Céspedes</Link></span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">© 2024 API CABYS GO. All rights reserved.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
