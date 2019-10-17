var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    discription: "A pair of warm, fuzzy socks",
    image: "./assets/vmSocks-green.jpg",
    link:
      "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
    instock: true,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ],
    sizes: ["Small", "Medium", "Large"]
  }
});
