import styled, { css } from "styled-components/native"
import { getWidthSize } from "../../../utils/responsivity"
import { theme } from "../../styles/theme"
export const LoginContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 40px;
  text-align: center;
`

export const Image = styled.Image`
  width: ${getWidthSize(202)}px;
  height: ${getWidthSize(80)}px;
`

export const Container = styled.ScrollView`
  flex: 1;
  padding: 15px;

  padding: 10px;
`

export const LogoContainer = styled.View`
  align-items: center;
  margin-bottom: 100px;
`

export const Logo = styled.Image``

export const ClickableTextButton = styled.TouchableOpacity`
  max-width: 45%;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`

export const ContainerButtonSignUp = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
`

export const ClickableText = styled.Text`
  color: ${theme.colors.primaryGreen};
  text-decoration: underline;
  text-decoration-color: ${theme.colors.primaryGreen};
  font-weight: bold;
  font-family: ${theme.font.family};
`

export const ClickableTextSignUpButton = styled.TouchableOpacity`
  margin-left: 10px;
`
