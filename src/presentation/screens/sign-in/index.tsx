import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Text, TouchableOpacity } from "react-native"
import { IAuthentication } from "../../../domain/usecases/interfaces/category/authentication"
import LottieView from "lottie-react-native"
import {
  ClickableText,
  ClickableTextButton,
  ClickableTextSignUpButton,
  Container,
  ContainerButtonSignUp,
  Image,
  LoginContainer,
  LogoContainer,
} from "./styles"

import { useAuth } from "../../../application/contexts/Auth/Auth"
import { AllRoutes } from "../../../application/navigation/routes-types"
import { DefaultNavigationProps } from "../../../application/navigation/types"

import {
  isValidEmail,
  isStrongPassword,
} from "../../../domain/shared/reggex-patterns"

import { Button, TextInput, Toast } from "../../components"
import { getWidthSize } from "../../../utils/responsivity"
import { useToast, Box } from "native-base"
import { theme } from "../../styles/theme"

type Props = {
  authetication: IAuthentication
}

export default function SignIn({ authetication }: Props) {
  const [loading, setLoading] = useState(false)
  const context = useAuth()
  const navigation = useNavigation<DefaultNavigationProps>()
  const toast = useToast()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = async (data: any) => {
    try {
      setLoading(true)
      const { token } = await authetication.auth({ ...data })

      const payload = { token: token, username: data.username }
      context.signIn({ ...payload })

      toast.show({
        render: () => {
          return (
            <Toast color={theme.colors.primaryGreen} label={"Login Sucess!"} />
          )
        },
      })
    } catch (err) {
      toast.show({
        render: () => {
          return <Toast color="red" label={err.message} />
        },
      })

      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = () => {
    // navigation.navigate(AllRoutes.AtDiscount)
  }

  const handleSignUp = () => {
    navigation.navigate(AllRoutes.SignUp)
  }

  return (
    <Container>
      <LoginContainer>
        <LottieView
          source={require("../../assets/animations/login.json")}
          autoPlay
          loop={true}
          autoSize
          style={{
            width: "100%",
            justifyContent: "center",
            marginBottom: getWidthSize(-40),
          }}
        />
        <Text>Default Username: johnd </Text>
        <Text>Default Password: m38rmF$ </Text>

        <TextInput
          control={control}
          errors={errors}
          name="username"
          label="Username"
          placeholder="Digite seu e-email"
          keyboardType="email-address"
          iconName="email-plus"
          rules={{
            required: { message: "O username é obrigatório", value: true },
            maxLength: 255,
          }}
        />

        <TextInput
          control={control}
          errors={errors}
          label="Password"
          name="password"
          placeholder="Digite a sua senha."
          iconName="account-lock"
          secureTextEntry
          rules={{
            required: { message: "A Senha é obrigatória.", value: true },
            pattern: {
              message:
                "A senha deve conter no minímo 8 dígitos, um caractere especial e uma letra maiúscula",
              value: isStrongPassword,
            },
          }}
        />

        <ClickableTextButton>
          <TouchableOpacity onPress={handleForgotPassword}>
            <ClickableText>Forgot Password?</ClickableText>
          </TouchableOpacity>
        </ClickableTextButton>

        <Button
          title="Log In"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          marginTop={getWidthSize(30)}
        />

        <ContainerButtonSignUp>
          <Text>Not registered yet?</Text>
          <ClickableTextSignUpButton>
            <TouchableOpacity onPress={handleSignUp}>
              <ClickableText>Sign Up</ClickableText>
            </TouchableOpacity>
          </ClickableTextSignUpButton>
        </ContainerButtonSignUp>
      </LoginContainer>
    </Container>
  )
}
