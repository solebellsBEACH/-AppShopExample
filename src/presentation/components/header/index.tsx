import { TouchableOpacity } from "react-native"
import React from "react"
import { BackGroundImage, Container, TextBox, Label } from "./styles"
import { View } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { theme } from "../../styles/theme"
import { useNavigation } from "@react-navigation/native"

interface IHeader {
  label: string
}
const Header = ({ label }: IHeader) => {
  const navigation = useNavigation()
  return (
    <Container>
      <BackGroundImage
        source={require("../../assets/images/food-background.png")}
      />

      <TextBox>
        <TouchableOpacity
          style={{ left: 0, position: "absolute" }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={35} color={theme.colors.white} />
        </TouchableOpacity>

        <View>
          <Label>{label}</Label>
        </View>
      </TextBox>
    </Container>
  )
}

export default Header
