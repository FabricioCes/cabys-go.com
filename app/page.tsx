import { Suspense } from "react"
import SearchForm from "@/components/SearchForm"
import SearchResults from "@/components/SearchResults"
import Head from "next/head"

export default function SearchPage() {
  return (
    <>
      <Head>
        <title>Buscar códigos CABYS | CABYS API GO</title>
        <meta name="description" content="Buscador de códigos CABYS de Costa Rica. Encuentra fácilmente el impuesto asociado a cualquier producto. | Find CABYS tax codes in Costa Rica easily." />
        <meta name="keywords" content="CABYS, impuestos Costa Rica, códigos de productos, tax codes, Costa Rica, catalog, búsqueda CABYS" />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph y Twitter */}
        <meta property="og:title" content="Buscar códigos CABYS | CABYS API GO" />
        <meta property="og:description" content="Encuentra fácilmente códigos CABYS en Costa Rica para productos y servicios. Búsqueda rápida, gratuita y abierta." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cabys-api.vercel.app/" />
        <meta property="og:image" content="https://cabys-api.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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
    </>

  )
}
