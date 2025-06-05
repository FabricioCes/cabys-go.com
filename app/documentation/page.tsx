import DocsSection from "@/components/DocsSection"
import Head from "next/head"

export default function DocumentationPage() {
  return (
    <>
      <Head>
        <title>Documentación de la API CABYS | CABYS API GO</title>
        <meta name="description" content="Consulta la documentación completa para integrar la API de códigos CABYS de Costa Rica. Incluye ejemplos, endpoints, y más. | Full documentation to integrate the Costa Rica CABYS code API." />
        <meta name="keywords" content="API CABYS, documentación CABYS, Costa Rica tax API, códigos de bienes y servicios, CABYS API GO" />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph y Twitter */}
        <meta property="og:title" content="Documentación CABYS API GO" />
        <meta property="og:description" content="Documentación para desarrolladores sobre la API pública de códigos CABYS. REST API simple y gratuita." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cabys-api.vercel.app/docs" />
        <meta property="og:image" content="https://cabys-api.vercel.app/og-docs.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">API Documentation</h1>
          <p className="text-xl text-muted-foreground">Complete guide to using the CABYS API GO service</p>
        </div>

        <DocsSection />
      </div>
    </>
  )
}
