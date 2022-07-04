import { useRoute } from "@react-navigation/native"
import React from "react"
import { makeRemoteGetProductsByCategory } from "../../../application/factories/usecases/categories/remote-getProductsByCategory-factory"
import { DefaultScreen } from "../../components"
import CardMenu from "./components/card-menu"

const Category = () => {
  const route = useRoute()
  const { item } = route.params
  return (
    <DefaultScreen namePage={item} showHeader>
      <CardMenu
        getProductsByCategory={makeRemoteGetProductsByCategory(item)}
        category={item}
      />
    </DefaultScreen>
  )
}

export default Category
