import React, { useEffect, useState } from "react"
import { IGetProductsByCategory } from "../../../../../domain/usecases/interfaces/category/getProductsByCategory"
import { Product } from "../../../../../interfaces/models/Product"
import CardItem from "../card-item"
import { Container, FlatList } from "./styles"
import { ActivityIndicator } from "react-native"
interface CardMenuProps {
  marginBottom?: number
  getProductsByCategory: IGetProductsByCategory
  category: string
}
const CardMenu = ({ marginBottom, getProductsByCategory }: CardMenuProps) => {
  const [data, setData] = useState<Product[]>()
  const [loading, setLoading] = useState(false)

  const makeRequest = async () => {
    setLoading(true)
    setData(await getProductsByCategory.get())
    setLoading(false)
  }

  useEffect(() => {
    makeRequest()
  }, [getProductsByCategory])
  function renderItem(item: any) {
    return <CardItem item={item} key={item.id} />
  }

  return (
    <Container marginBottom={marginBottom}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ flexDirection: "column" }}
          numColumns={2}
          data={data}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item: any) => item.id}
        />
      )}
    </Container>
  )
}

export default CardMenu
