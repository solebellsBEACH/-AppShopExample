import React, { useEffect } from "react"
import { BackHandler, TouchableOpacity } from "react-native"
import { DefaultScreen, SearchBar } from "../../components"
import { Container, Image, ScrollView } from "./styles"
import CardMenuCategories from "./components/categories/card-menu"

import { useNavigation } from "@react-navigation/native"

import { makeRemoteGetCategories } from "../../../application/factories/usecases/categories/remote-getCategories-factory"
import { makeRemoteGetProducts } from "../../../application/factories/usecases/categories/remote-getProducts-factory"
import CardMenuPopularDeals from "./components/popular-deals/card-menu"
import { AllRoutes } from "../../../application/navigation/routes-types"

const Dashboard = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true
    })
  })

  const navigation = useNavigation()

  return (
    <Container>
      <SearchBar />
      <DefaultScreen namePage="Home" scroollable>
        <CardMenuCategories
          title="Categories"
          getData={makeRemoteGetCategories()}
        />
        <ScrollView horizontal centerContent>
          <TouchableOpacity
            onPress={() => navigation.navigate(AllRoutes.Offer)}
          >
            <Image source={require("../../assets/offers/special-day.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(AllRoutes.Offer)}
          >
            <Image source={require("../../assets/offers/black-friday.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(AllRoutes.Offer)}
          >
            <Image source={require("../../assets/offers/black-friday3.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(AllRoutes.Offer)}
          >
            <Image source={require("../../assets/offers/black-friday2.jpg")} />
          </TouchableOpacity>
        </ScrollView>

        <CardMenuPopularDeals
          title="Popular Deals"
          marginBottom={200}
          getData={makeRemoteGetProducts()}
        />
      </DefaultScreen>
    </Container>
  )
}

export default Dashboard
