const app = Vue.createApp({
  data() {
    return {
      github: {
        url: 'https://github.com/oasis-forever/vuejs_tutorial'
      },
      product: {
        onSale: true,
        name: 'Great Socks',
        description: 'Smell-proof socks',
        ingredients: ['50% cotton', '30% wool', '20% polyester'],
        sizes: ['S', 'M', 'L', 'XL'],
        price: '980 JPY for 3 pairs',
        image: './assets/images/socks_green.jpg',
        inStock: false,
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
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
      if (this.product.cart != 0) {
        this.product.cart -= 1;
      }
    },
    updateImage(variantImage) {
      this.product.image = variantImage;
    }
  }
});
