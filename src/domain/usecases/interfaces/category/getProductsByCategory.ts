import { Product } from "../../../../interfaces/models/Product"

export interface IGetProductsByCategory {
  get: () => Promise<Product[]>
}
