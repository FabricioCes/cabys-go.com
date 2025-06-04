"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)

    // Update URL with search query
    const params = new URLSearchParams()
    params.set("q", query.trim())
    router.push(`/?${params.toString()}`)

    setIsLoading(false)
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        
        <form onSubmit={handleSearch} className="flex space-x-2">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Busca por código CABYS o descripción..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Button type="submit" disabled={isLoading || !query.trim()}>
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
              <Search className="h-4 w-4" />
            )}
            <span className="ml-2">Buscar</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
