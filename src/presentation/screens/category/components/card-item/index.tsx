import { Entypo } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { TouchableOpacity } from "react-native"
import { AllRoutes } from "../../../../../application/navigation/routes-types"

import { Product } from "../../../../../interfaces/models/Product"

import {
  Container,
  LabelBox,
  BoxImage,
  Image,
  ProductName,
  Discount,
  Price,
  CartController,
  AmountText,
} from "./styles"

interface CardItemProps {
  item: Product
}
const CardItem = ({ item }: CardItemProps) => {
  const navigation = useNavigation()
  const [isSelected, setIsSelected] = useState(false)
  const [numberOfItems, setNumberOfItems] = useState(0)

  function handleClickOnPlus() {
    isSelected
      ? setNumberOfItems(numberOfItems + 1)
      : setIsSelected(!isSelected)
  }
  function handleClickOnMinus() {
    setNumberOfItems(numberOfItems > 0 ? numberOfItems - 1 : 0)
    setIsSelected(numberOfItems === 0 ? !isSelected : true)
  }

  return (
    <Container>
      <BoxImage
        onPress={() =>
          navigation.navigate(AllRoutes.Product, { product: item })
        }
      >
        <Image
          resizeMode="stretch"
          source={{
            uri: item.image,
          }}
        />
      </BoxImage>

      <LabelBox>
        <ProductName>
          {item.title.length < 70
            ? `${item.title}`
            : `${item.title.substring(0, 60)}...`}
        </ProductName>
        <Discount>{(item.price * 0.2).toFixed(2)}</Discount>
        <Price>{item.price}</Price>
      </LabelBox>

      <CartController selected={isSelected}>
        <TouchableOpacity onPress={handleClickOnPlus}>
          <Entypo name="plus" size={25} color="white" />
        </TouchableOpacity>

        {isSelected && (
          <>
            <AmountText>{numberOfItems}</AmountText>
            <TouchableOpacity onPress={handleClickOnMinus}>
              <Entypo name="minus" size={25} color="white" />
            </TouchableOpacity>
          </>
        )}
      </CartController>
    </Container>
  )
}

export default CardItem
