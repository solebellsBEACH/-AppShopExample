import React from "react"

import { Container } from "./styles"

interface IDefaultCard {
  children: React.ReactNode

  marginBottom?: number
}
const DefaultCard = ({ children, marginBottom }: IDefaultCard) => {
  return <Container marginBottom={marginBottom}>{children}</Container>
}

export default DefaultCard
