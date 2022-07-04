import { useNavigation } from "@react-navigation/native"
import React from "react"
import { AllRoutes } from "../../../../../application/navigation/routes-types"

import { Product } from "../../../../../interfaces/models/Product"

import { Container, LabelBox, Label, BoxImage, Image } from "./styles"

interface CardItemProps {
  item: Product
}
const CardItem = ({ item }: CardItemProps) => {
  const navigation = useNavigation()

  return (
    <Container>
      <BoxImage
        onPress={() =>
          navigation.navigate(AllRoutes.Product, { product: item })
        }
      >
        <Image source={{ uri: item.image }} />
      </BoxImage>
      <LabelBox>
        <Label>{item.title.split(" ").slice(0, 2).join(" ")}</Label>
      </LabelBox>
    </Container>
  )
}

export default CardItem
