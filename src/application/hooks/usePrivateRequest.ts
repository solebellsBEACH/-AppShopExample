import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react"
import { StorageKeys } from "../contexts/Auth/AuthType"

type IError = {
  message: string
}

export function usePrivateRequest<Return, Params = {}>(request: any) {
  const [data, setData] = useState<Return | undefined>()
  const [error, setError] = useState<IError | undefined>()
  const [loading, setLoading] = useState(false)

  const makeRequest = async (params?: Params) => {
    if (loading) {
      return
    }

    try {
      setLoading(true)
      const authText = await AsyncStorage.getItem(StorageKeys.Token)

      if (authText) {
        const authData = JSON.parse(authText)

        let dataFromAPI: any

        if (params) {
          dataFromAPI = await request(params, authData.accessToken)
        }

        if (!params) {
          dataFromAPI = await request(authData.accessToken)
        }
        setData(dataFromAPI)
      } else {
        setError({ message: "User Token invalid" })
      }
    } catch (e: any) {
      setError({ message: e?.message })
    } finally {
      setLoading(false)
    }
  }

  return { data, error, loading, makeRequest }
}
