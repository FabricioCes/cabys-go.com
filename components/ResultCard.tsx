import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ResultCardProps {
  result: {
    id: string
    description: string
    tax_percent: number
  }
}

export default function ResultCard({ result }: ResultCardProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-mono">{result.id}</CardTitle>
          <Badge variant="secondary">Impuesto del {result.tax_percent * 100}%</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{result.description}</p>
      </CardContent>
    </Card>
  )
}
