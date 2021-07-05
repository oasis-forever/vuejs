const app = Vue.createApp({
  data() {
    return {
      github: {
        url: 'https://github.com/oasis-forever/vuejs_tutorial'
      },
      product: {
        name: 'Great Socks',
        description: 'Smell-proof socks',
        price: '980 JPY for 3 pairs',
        image: './assets/images/socks_blue.jpg',
        inventory: 0,
        onSale: true
      }
    }
  }
})
