import { useRoute } from "@react-navigation/native"
import React from "react"
import { DefaultScreen } from "../../components"
import CardMenu from "./components/card-menu"

const Categories = () => {
  const route = useRoute()
  const { categories } = route.params
  return (
    <DefaultScreen namePage="Categories" showHeader>
      <CardMenu categories={categories} />
    </DefaultScreen>
  )
}

export default Categories
