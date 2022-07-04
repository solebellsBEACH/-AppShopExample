import { useRoute } from "@react-navigation/native"
import React from "react"
import { DefaultScreen } from "../../components"

interface IProduct {}
const Product = () => {
  const route = useRoute()
  const { product } = route.params

  return (
    product && (
      <DefaultScreen
        namePage={product.title.split(" ").slice(0, 2).join(" ")}
        showHeader
      ></DefaultScreen>
    )
  )
}

export default Product
