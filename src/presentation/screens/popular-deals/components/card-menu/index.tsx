import React from "react"
import { ActivityIndicator } from "react-native"

import { Product } from "../../../../../interfaces/models/Product"
import { getWidthSize } from "../../../../../utils/responsivity"

import CardItem from "../card-item"
import { Container, FlatList } from "./styles"

interface CardMenuProps {
  marginBottom?: number
  products: Product[]
}
const CardMenu = ({ marginBottom, products }: CardMenuProps) => {
  function renderItem(item: Product) {
    return <CardItem item={item} key={item.id} />
  }

  return (
    <Container marginBottom={marginBottom}>
      {products ? (
        <FlatList
          style={{
            flexDirection: "column",
          }}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "center",
            paddingLeft: getWidthSize(10),
          }}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={products}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item: any) => item.id}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </Container>
  )
}

export default CardMenu
