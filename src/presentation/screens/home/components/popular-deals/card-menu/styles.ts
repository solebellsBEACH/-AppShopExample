import styled from "styled-components/native"
import { theme } from "../../../../../styles/theme"

interface ContainerProps {
  marginBottom?: number
}
export const Container = styled.View<ContainerProps>`
  justify-content: center;
  height: 225px;
  background-color: white;
  border-radius: 25px;
  box-shadow: gray 0px 0px 1px;
  elevation: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 10)}px;
`

export const CardHeader = styled.View`
  height: 20%;
  justify-content: space-between;
  /* background-color: red; */
`

export const Row = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ededed;
  margin-bottom: 20px;
`
export const LabelBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
export const Label = styled.Text`
  font-size: 20px;
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weight.bold};
`

export const SeeAllLabel = styled.Text`
  font-size: 16px;
  font-family: ${theme.font.family};
  color: ${theme.colors.primaryGreen};
`

export const FlatList = styled.FlatList`
  padding-top: 5px;
`
