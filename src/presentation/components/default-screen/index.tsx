import React from "react"
import Header from "../header"
import { Container, Scroll } from "./styles"

interface IDefaultScreen {
  namePage: string
  showHeader?: boolean
  children: React.ReactNode
  height?: number
  scroollable?: boolean
}
const DefaultScreen = ({
  scroollable,
  children,
  namePage,
  showHeader,
  height,
}: IDefaultScreen) => {
  return (
    <>
      {showHeader && <Header label={namePage} />}

      {scroollable ? (
        <Scroll height={height}>{children}</Scroll>
      ) : (
        <Container height={height}>{children}</Container>
      )}
    </>
  )
}

export default DefaultScreen
