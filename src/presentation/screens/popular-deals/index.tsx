import { useRoute } from "@react-navigation/native"
import React from "react"
import { Product } from "../../../interfaces/models/Product"
import { DefaultScreen } from "../../components"
import CardMenu from "./components/card-menu"

const PopularDeals = () => {
  const route = useRoute()
  const { products } = route.params

  return (
    <DefaultScreen namePage="PopularDeals" showHeader>
      <CardMenu products={products} />
    </DefaultScreen>
  )
}

export default PopularDeals
