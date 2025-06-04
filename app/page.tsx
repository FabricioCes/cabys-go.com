import { Suspense } from "react"
import SearchForm from "@/components/SearchForm"
import SearchResults from "@/components/SearchResults"

export default function SearchPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Buscador de Códigos CABYS</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
         Busca el código CABYS o descripción de productos y servicios en Costa Rica.
        </p>
      </div>

      <SearchForm />

      <Suspense fallback={<div className="text-center">Cargando Resultados...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  )
}
