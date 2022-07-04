import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Category } from "../../interfaces/models/Category"
import { Product } from "../../interfaces/models/Product"

export type StackParamList = {
  atDiscount: undefined
  cart: undefined
  categories: undefined
  category: { category: Category }
  home: undefined
  more: undefined
  offer: undefined
  order: undefined
  orderDetails: undefined
  popularDeals: { email: string }
  product: { product: Product }
  profile: undefined
  signIn: undefined
  signUp: undefined
}

type Props = NativeStackScreenProps<StackParamList>
export type DefaultNavigationProps = Props["navigation"]
