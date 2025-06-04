"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Search, FileText } from "lucide-react"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CA</span>
            </div>
            <span className="text-xl font-bold">CABYS GO</span>
          </Link>

          <nav className="flex items-center space-x-2">
            <Button variant={pathname === "/" ? "default" : "ghost"} asChild className="flex items-center space-x-2">
              <Link href="/">
                <Search className="h-4 w-4" />
                <span>Buscar</span>
              </Link>
            </Button>
            <Button
              variant={pathname === "/documentation" ? "default" : "ghost"}
              asChild
              className="flex items-center space-x-2"
            >
              <Link href="/documentation">
                <FileText className="h-4 w-4" />
                <span>Documentación</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
