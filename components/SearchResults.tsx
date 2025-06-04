"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import ResultCard from "@/components/ResultCard"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

interface CabysResult {
  id: string
  description: string
  tax_percent: number
}

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const [results, setResults] = useState<CabysResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }

    const fetchResults = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL

        if (!apiUrl) {
          throw new Error("Missing NEXT_PUBLIC_API_URL")
        }

        const response = await fetch(`${apiUrl}/api/cabys?query=${encodeURIComponent(query)}`)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        
        // Asegúrate que los datos tengan la forma de CabysResult[]
        setResults(data? data : [])
      } catch (err) {
        setError("Failed to fetch results. Please try again.")
        console.error("Search error:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [query])

  if (!query) {
    return null
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2 text-lg">Buscando...</span>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  if (results.length === 0) {
    return (
      <Alert>
        <AlertDescription>
         No se encontraron resultados para: {query}. Intenta con otro término de búsqueda y asegúrate de que no haya errores tipográficos.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-muted-foreground">
          Se han encontrado {results.length} resultado{results.length !== 1 ? "s" : ""} para {query}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.map((result, idx) => (
          <ResultCard key={idx} result={result} />
        ))}
      </div>
    </div>
  )
}
