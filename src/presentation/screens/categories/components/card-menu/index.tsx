import React from "react"
import { ActivityIndicator } from "react-native"
import { Category } from "../../../../../interfaces/models/Category"
import { getWidthSize } from "../../../../../utils/responsivity"

import CardItem from "../card-item"
import { Container, FlatList } from "./styles"

interface CardMenuProps {
  marginBottom?: number
  categories: Category[]
}
const CardMenu = ({ marginBottom, categories }: CardMenuProps) => {
  function renderItem(item: any) {
    return <CardItem item={item} key={item.id} />
  }

  return (
    <Container marginBottom={marginBottom}>
      {categories ? (
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
          data={categories}
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
