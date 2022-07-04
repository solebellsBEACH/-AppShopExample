import styled from "styled-components/native"
import { getWidthSize } from "../../../utils/responsivity"

interface IContainer {
  color: string
}
export const Container = styled.View<IContainer>`
  background-color: ${(props) => (props.color ? props.color : "black")};
  justify-content: center;
  align-items: center;
  border-radius: 10;
  width: ${getWidthSize(250)};
  height: ${getWidthSize(50)};
`

export const Text = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`
