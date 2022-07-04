import { Category } from "../../../../interfaces/models/Category"

export interface IGetCategories {
  get: () => Promise<Category[]>
}
