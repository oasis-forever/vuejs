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
        image: './assets/images/socks_blue.jpg',
        inventory: 100,
        variants: [
          { id: 2234, color: 'green' },
          { id: 2235, color: 'blue' }
        ]
      }
    }
  }
});
