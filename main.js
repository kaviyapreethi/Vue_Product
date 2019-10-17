var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    discription: "A pair of warm, fuzzy socks",
    selectedVariant: 0,
    link:
      "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green.jpg",
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue.jpg",
        variantQuantity: 0
      }
    ],
    sizes: ["Small", "Medium", "Large"],
    cart: 0
  },
  methods: {
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      return this.brand + " " + this.product + " On Sale!";
    }
  }
});
