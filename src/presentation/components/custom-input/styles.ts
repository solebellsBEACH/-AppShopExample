import styled from "styled-components/native"
import { theme } from "../../../presentation/styles/theme"
import { getWidthSize } from "../../../utils/responsivity"
type WrapperProps = {
  disabled?: boolean
}
type InputWrapperProps = {
  error: boolean
}

export const Wrapper = styled.View<WrapperProps>`
  /* opacity: 0.5; */
  margin-bottom: ${getWidthSize(30)}px;
  width: 100%;
`

export const InputWrapper = styled.View<InputWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 100%;
  border-bottom-width: 1px;

  border-color: ${(props) => (props.error ? "red" : "black")};
`

export const Label = styled.Text`
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.medium}px;
  color: ${theme.colors.black};
`

export const ErrorMessage = styled.Text`
  color: red;
`

export const IconImage = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 4px;
`
