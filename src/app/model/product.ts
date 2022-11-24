import { Category } from "./category"

export interface Product {
      id :number
	  nom :string
	  prix: number
	  quantite: string
	  photo: string
      categorie : Category
}
