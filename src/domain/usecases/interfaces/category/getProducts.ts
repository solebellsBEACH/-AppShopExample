import { Product } from "../../../../interfaces/models/Product"

export interface IGetProducts {
  get: () => Promise<Product[]>
}
