import React from "react"
import { Controller, UseControllerProps } from "react-hook-form"
import { KeyboardTypeOptions } from "react-native"
import CustomInput from "../custom-input"

import * as S from "./styles"

type ControlledInputProps = {
  control: any
  name: string
  placeholder: string
  errors: any
  rules?: UseControllerProps["rules"]
  secureTextEntry?: boolean
  keyboardType?: KeyboardTypeOptions
  iconName?: string
  label: string
  mask?: (value: string) => string
  onClickOutside?: () => void
  maxLength?: number
  loading?: boolean
  disabled?: boolean
}

const TextInput = ({
  control,
  errors,
  name,
  placeholder,
  rules,
  secureTextEntry,
  keyboardType = "default",
  iconName,
  label,
  mask,
  onClickOutside,
  maxLength,
  loading,
  disabled,
}: ControlledInputProps) => {
  const handleMask = (onChange: any, text: string) => {
    if (mask) {
      onChange(mask(text))
      return
    }
    onChange(text)
  }

  const handleOnBlur = (onBlurControl: any) => {
    if (onClickOutside) {
      onClickOutside()
    }
    onBlurControl()
  }
  return (
    <S.Wrapper>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <CustomInput
              onBlur={() => handleOnBlur(onBlur)}
              onChangeText={(text: string) => handleMask(onChange, text)}
              value={value}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              keyboardType={keyboardType}
              iconName={iconName}
              error={errors[name]}
              label={label}
              maxLength={maxLength}
              loading={loading}
              disabled={disabled}
            />
          )
        }}
      />
    </S.Wrapper>
  )
}

export default TextInput
