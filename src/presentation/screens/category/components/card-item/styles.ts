import styled from "styled-components/native"
import { getWidthSize } from "../../../../../utils/responsivity"
import { theme } from "../../../../styles/theme"

export const Container = styled.View`
  height: ${getWidthSize(320)};
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
  width: 50%;
  border-color: gray;
  border-width: 0.2px;
  border-top-width: 0px;
  border-style: solid;

  border-color: ${theme.colors.gray};
`
export const LabelBox = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  left: 0px;
  max-width: 80%;
  margin-left: 5px;
`

export const ProductName = styled.Text`
  font-size: 16px;
  font-family: ${theme.font.family};
  text-align: left;
  font-weight: bold;
`

export const Discount = styled.Text`
  font-size: 16px;
  font-family: ${theme.font.family};
  text-align: center;
  color: ${theme.colors.gray};
  margin-top: 5px;
`

export const Price = styled.Text`
  font-size: 20px;
  color: ${theme.colors.primaryGreen};
  font-weight: bold;
  font-family: ${theme.font.family};
  text-align: center;
  margin-top: 5px;
`

export const BoxImage = styled.TouchableOpacity`
  justify-content: center;
  padding: 5px;
  align-items: center;
  width: 100%;
  height: 50%;
  border-radius: 20px;
  margin-bottom: 5px;
`

export const Image = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`

export const BoxInfo = styled.View`
  background-color: purple;
`

interface ICartController {
  selected: boolean
}
export const CartController = styled.View<ICartController>`
  background-color: ${theme.colors.primaryGreen};
  position: absolute;
  height: ${(props) => (props.selected ? "40%" : "13%")};
  width: 22%;
  border-top-left-radius: 25px;
  bottom: 0px;
  right: 0px;
  justify-content: space-evenly;
  align-items: center;
`

export const AmountText = styled.Text`
  font-size: 20px;
  color: ${theme.colors.white};
  font-weight: bold;
  font-family: ${theme.font.family};
  text-align: center;
  margin-top: 5px;
`
