Vue.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
});

Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">

            <div class="product-image">
                <img v-bind:src="image">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>{{ discription }}</p>
                <a v-bind:href="link">Click here to view Product Image</a>
                <p v-if="inStock">In Stock</p>
                <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
                <p>Shipping : {{ shipping }} </p>
                <p>{{ sale }}</p>
                <p>Choose Color:</p>
                <div class="color-box" v-for="(variant,index) in variants" :key="variant.variantId"
                    :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">
                </div>
                <p>Available Size:</p>
                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>

                <button v-on:click="addToCart" :disabled="!inStock"
                    :class="{ disabledButton: !inStock, outOfStockButton: !inStock }">Add to
                    cart</button>
                <button @click="removeFromCart">Remove from cart</button>

            </div>

        </div> 
  `,
  data() {
    return {
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
      sizes: ["Small", "Medium", "Large"]
    };
  },

  methods: {
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    },
    removeFromCart: function() {
      this.$emit(
        "remove-from-cart",
        this.variants[this.selectedVariant].variantId
      );
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
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeItem(id) {
      for (var i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === id) {
          this.cart.splice(i, 1);
        }
      }
    }
  }
});
