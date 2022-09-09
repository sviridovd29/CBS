export interface Cars {
  id: number,
  quantity: number,
  brand: string,
  model: string,
  price?: number,
  url: string,
  description?: string

}

export interface ListCars {
  id: number,
  quantity: number,
  brand: string,
  model: string,
  price: number,
  url: string,
  description: string
}
