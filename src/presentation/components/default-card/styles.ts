import styled from "styled-components/native"

interface IContainerProps {
  marginBottom?: number
}
export const Container = styled.View<IContainerProps>`
  background-color: white;
  flex: 1;
  border-radius: 25px;
  padding: 10px;

  align-items: center;
  box-shadow: gray 0px 3px 8px;
  elevation: 6;

  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
`
