import styled from "styled-components/native"
import { theme } from "../../styles/theme"

export const Container = styled.View`
  width: 100%;
  background-color: ${theme.colors.primaryGreen};
  height: 150px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const TextBox = styled.View`
  height: 70px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const BackGroundImage = styled.Image`
  height: 150px;
  width: 120%;
  opacity: 0.1;
  position: absolute;
`

interface LabelProps {
  marginTop?: string
}
export const Label = styled.Text<LabelProps>`
  font-size: 30px;
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.colors.lightWhite};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
`
