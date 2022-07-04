import { View, Text } from "react-native"
import React from "react"
import LottieView from "lottie-react-native"
import { useNavigation } from "@react-navigation/native"
import { Container } from "./styles"

const SplashScreen = () => {
  const navigationRef = useNavigation()

  return (
    <Container>
      <LottieView
        source={require("./splashScreen.json")}
        autoPlay
        loop={false}
        autoSize
        style={{ width: "100%", marginBottom: 15, marginTop: "10%" }}
        onAnimationFinish={() => navigationRef.navigate("MyTabs")}
      />
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          App Shop Example.
        </Text>
        <Text
          style={{
            fontWeight: "regular",
            fontSize: 14,
            marginTop: 5,
          }}
        >
          Created by: @philoureiro
        </Text>
      </View>
    </Container>
  )
}

export default SplashScreen
