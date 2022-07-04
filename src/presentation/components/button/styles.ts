import styled from "styled-components/native"
import { getWidthSize } from "../../../utils/responsivity"
import { theme } from "../../styles/theme"

interface IButtonProp {
  marginTop?: number
  marginBottom?: number
}
export const TouchableOpacity = styled.TouchableOpacity<IButtonProp>`
  width: ${getWidthSize(150)};
  height: ${getWidthSize(50)};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primaryGreen};

  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
`

export const Title = styled.Text`
  font-family: ${theme.font.family};
  font-weight: bold;
  color: ${theme.colors.white};
  font-size: 20;
`
