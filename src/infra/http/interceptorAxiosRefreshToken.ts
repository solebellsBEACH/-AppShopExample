import AsyncStorage from "@react-native-async-storage/async-storage"
import { AxiosStatic } from "axios"
import { StorageKeys } from "../../application/contexts/Auth/AuthType"

export function interceptorAxiosRefreshToken(axios: AxiosStatic) {
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (err) => {
      return new Promise(async (resolve, reject) => {
        const originalReq = err.config
        if (
          err?.response?.status === 401 &&
          err?.config &&
          !originalReq?._retry
        ) {
          try {
            originalReq._retry = true

            const refreshToken = await AsyncStorage.getItem(
              StorageKeys.RefreshToken
            )

            const {
              data: { data },
            } = await axios.post(`${process.env.API_URL}/auth/refreshToken`, {
              refreshToken,
            })

            await AsyncStorage.setItem(StorageKeys.Token, JSON.stringify(data))
            originalReq.headers.Authorization = `Bearer ${data.accessToken}`

            resolve(axios(originalReq))
          } catch (e) {
            await AsyncStorage.removeItem(StorageKeys.Token)
          }
        } else {
          reject(err)
        }
      })
    }
  )
}
