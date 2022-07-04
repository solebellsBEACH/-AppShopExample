import { View, Image, TouchableOpacity } from "react-native"
import React from "react"
import { DefaultCard, DefaultScreen } from "../../components"
import { useNavigation } from "@react-navigation/native"

import { getWidthSize } from "../../../utils/responsivity"
import { AllRoutes } from "../../../application/navigation/routes-types"

const Offer = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <DefaultScreen namePage="Offer" showHeader scroollable>
        <DefaultCard marginBottom={200}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate(AllRoutes.AtDiscount)}
          >
            <Image
              source={require("../../assets/offers/special-day.png")}
              style={{
                height: 150,
                width: getWidthSize(320),
                borderRadius: 25,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate(AllRoutes.AtDiscount)}
          >
            <Image
              source={require("../../assets/offers/black-friday3.jpg")}
              style={{
                height: 150,
                width: getWidthSize(320),
                borderRadius: 25,
                marginTop: 20,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate(AllRoutes.AtDiscount)}
          >
            <Image
              source={require("../../assets/offers/black-friday2.jpg")}
              style={{
                height: 150,
                width: getWidthSize(320),
                borderRadius: 25,
                marginTop: 20,
              }}
            />
          </TouchableOpacity>
        </DefaultCard>
      </DefaultScreen>
    </View>
  )
}

export default Offer
