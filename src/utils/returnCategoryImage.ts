export function returnImageCategory(name: string) {
  if (name === "electronics") {
    return require("../presentation/assets/images/eletronics.png")
  }
  if (name === "jewelery") {
    return require("../presentation/assets/images/jewelery.png")
  }
  if (name === "men's clothing") {
    return require("../presentation/assets/images/mens-clothing.png")
  }
  if (name === "women's clothing") {
    return require("../presentation/assets/images/womens-clothing.png")
  }
}
