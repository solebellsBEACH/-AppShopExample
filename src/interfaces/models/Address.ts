export interface Address {
  geolocation: {
    lat: number
    long: number
  }
  city: string
  street: string
  number: number
  zipcode: number
}
