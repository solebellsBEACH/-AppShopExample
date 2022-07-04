import React from "react"
import { CurvedBottomBar } from "react-native-curved-bottom-bar"
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons"
import { Cart, Home, More, Offer, Order, SignIn } from "../../screens"
import { theme } from "../../styles/theme"
import {
  CircleButton,
  Container,
  IconAndFlagBox,
  InternalCircle,
  Label,
  Tag,
  Text,
  TabBar,
} from "./styles"

import { AllRoutes } from "../../../application/navigation/routes-types"
import { makeRemoteAuthentication } from "../../../application/factories/usecases/categories/remote-authentication-factory"

const ThemeScreen = () => {
  function handleNavigate(navigate: any, routeName: any) {
    navigate(routeName)
  }

  function returnIconSelected(routeName: string, selectedTab?: string) {
    switch (routeName) {
      case AllRoutes.Home:
        return (
          <AntDesign
            name="appstore-o"
            color={routeName === selectedTab ? "white" : theme.colors.gray}
            size={routeName === selectedTab ? 30 : 25}
          />
        )
      case AllRoutes.Order:
        return (
          <FontAwesome
            name="shopping-basket"
            color={routeName === selectedTab ? "white" : theme.colors.gray}
            size={routeName === selectedTab ? 30 : 22}
          />
        )
      case AllRoutes.Cart:
        return (
          <MaterialCommunityIcons
            name="cart"
            color={theme.colors.primaryGreen}
            size={routeName === selectedTab ? 30 : 25}
          />
        )

      case AllRoutes.Offer:
        return (
          <Entypo
            name="shop"
            color={routeName === selectedTab ? "white" : theme.colors.gray}
            size={routeName === selectedTab ? 30 : 25}
          />
        )
      case AllRoutes.More:
        return (
          <Ionicons
            name="options"
            color={routeName === selectedTab ? "white" : theme.colors.gray}
            size={routeName === selectedTab ? 35 : 28}
          />
        )
    }
  }
  return (
    <Container>
      <CurvedBottomBar.Navigator
        screenOptions={{ headerShown: false }}
        type={"DOWN"}
        height={75}
        circleWidth={55}
        bgColor={theme.colors.primaryGreen}
        borderTopLeftRight={true}
        initialRouteName="Home"
        renderCircle={({ navigate, selectedTab }) => (
          <CircleButton
            onPress={() => {
              handleNavigate(navigate, selectedTab)
            }}
          >
            <InternalCircle>
              <IconAndFlagBox>
                <Tag source={require("../../assets/icons/tag.png")} />
                <Text>99</Text>
              </IconAndFlagBox>
              {returnIconSelected("Cart", selectedTab)}
            </InternalCircle>
          </CircleButton>
        )}
        tabBar={({ navigate, routeName, selectedTab }) => {
          return (
            <TabBar onPress={() => handleNavigate(navigate, routeName)}>
              {returnIconSelected(routeName, selectedTab)}

              <Label isSelected={routeName === selectedTab ? true : false}>
                {routeName}
              </Label>
            </TabBar>
          )
        }}
      >
        <CurvedBottomBar.Screen
          name="Home"
          position="LEFT"
          children={() => <Home />}
        />

        <CurvedBottomBar.Screen
          name="Order"
          position="LEFT"
          children={() => <Order />}
        />
        <CurvedBottomBar.Screen
          name="Cart"
          children={() => <Cart />}
          position="CENTER"
        />
        <CurvedBottomBar.Screen
          name="Offer"
          children={() => <Offer />}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="More"
          children={() => <SignIn authetication={makeRemoteAuthentication()} />}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </Container>
  )
}

export default ThemeScreen
