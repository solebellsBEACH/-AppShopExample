import React from "react"
import { Container, Text } from "./styles"

interface IToast {
  label: string
  color: string
}
const Toast = ({ label, color }: IToast) => {
  return (
    <Container color={color}>
      <Text>{label}</Text>
    </Container>
  )
}

export default Toast
