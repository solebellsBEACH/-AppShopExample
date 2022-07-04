import styled from "styled-components/native"
import { theme } from "../../styles/theme"

interface IContainerProps {
  height?: number
}

export const Container = styled.View<IContainerProps>`
  background-color: ${theme.colors.lightWhite};
  flex: 1;
  padding: 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: -20px;
  box-shadow: gray 0px 3px 8px;
  elevation: 6;
  height: ${(props) => (props.height ? props.height : 0)}px;
`

export const Scroll = styled.ScrollView<IContainerProps>`
  background-color: ${theme.colors.lightWhite};
  flex: 1;
  padding: 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: -20px;
  box-shadow: gray 0px 3px 8px;
  elevation: 6;
  height: ${(props) => (props.height ? props.height : 0)}px;
`
