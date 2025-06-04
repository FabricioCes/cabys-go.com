export interface CabysCode {
  id: string
  description: string
  tax_percent: number
  category?: string
}

export interface SearchResponse {
  results: CabysCode[]
  total: number
  query: string
}

export interface ApiError {
  error: string
  message: string
  status: number
}
