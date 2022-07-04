import styled from "styled-components/native"
import { theme } from "../../styles/theme"

export const Container = styled.View`
  width: 100%;
  background-color: ${theme.colors.primaryGreen};
  height: 250px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const TextBox = styled.View`
  height: 70px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const BackGroundImage = styled.Image`
  height: 250px;
  width: 120%;
  opacity: 0.1;
  position: absolute;
`

export const BoxImage = styled.TouchableOpacity`
  box-shadow: gray 0px 3px 8px;
  elevation: 6;
`

export const ProfileImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`

interface LabelProps {
  marginTop?: string
}
export const Label = styled.Text<LabelProps>`
  font-size: 18px;
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.colors.lightWhite};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
`

export const BoxInput = styled.View`
  flex-direction: row;
  width: 100%;
  width: 100%;
  height: 22%;
  border-radius: 15px;
  padding: 10px;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
  box-shadow: gray 0px 3px 8px;
  elevation: 6;
`

export const Input = styled.TextInput`
  flex: 1;
`
