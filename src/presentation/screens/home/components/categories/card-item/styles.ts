import styled from "styled-components/native"
import { theme } from "../../../../../styles/theme"

export const Container = styled.View`
  max-height: 90%;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  width: 100px;
  margin-right: 10px;
`
export const LabelBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Label = styled.Text`
  font-size: 16px;
  font-family: ${theme.font.family};
  text-align: center;
`

export const BoxImage = styled.TouchableOpacity`
  box-shadow: gray 0px 0px 0px;
  background-color: ${theme.colors.lightGreen};
  justify-content: center;
  padding: 5px;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 20px;
  margin-bottom: 5px;
  margin-top: 10px;
`

export const Image = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 20px;
`
