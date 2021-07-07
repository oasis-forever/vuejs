const app = Vue.createApp({
  data() {
    return {
      github: {
        url: 'https://github.com/oasis-forever/vuejs_tutorial'
      },
      product: {
        onSale: true,
        name: 'Great Socks',
        brand: 'Vue Mastery',
        description: 'Smell-proof socks',
        ingredients: ['50% cotton', '30% wool', '20% polyester'],
        sizes: ['S', 'M', 'L', 'XL'],
        price: '980 JPY for 3 pairs',
        image: './assets/images/socks_green.jpg',
        selectedVariant: 0,
        variants: [
          {
            id: 2234,
            color: 'green',
            image: './assets/images/socks_green.jpg',
            quantity: 10
          },
          {
            id: 2235,
            color: 'blue',
            image: './assets/images/socks_blue.jpg',
            quantity: 1
          }
        ],
        cart: 0
      }
    }
  },
  methods: {
    addToCart() {
      this.product.cart += 1;
    },
    removeFromCart() {
      if (this.product.cart !== 0) {
        this.product.cart -= 1;
      }
    },
    updateVariant(index) {
      this.product.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return `${this.product.brand} ${this.product.name}`
    },
    image() {
      return this.product.variants[this.product.selectedVariant].image
    },
    stockStatus() {
      const counter = this.product.variants[this.product.selectedVariant].quantity >= 2 ? 'items' : 'item';
      const verb = this.product.variants[this.product.selectedVariant].quantity === 1 ? 'remains' : 'remain';
      return `${this.product.variants[this.product.selectedVariant].quantity} ${counter} ${verb}`
    },
    inStock() {
      if (this.product.variants[this.product.selectedVariant].quantity !== 0) {
        return true;
      }
    },
  }
});
