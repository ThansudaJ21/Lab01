const product = 'Boots'


const app = Vue.createApp({
    data() {
        return {
            product: 'Boots',
             image: './assets/images/socks_green.jpg',
             url: 'https://www.camt.cmu.ac.th/index.php/th/',
            desc: 'This is a boots',
            inStock: true,
            inventory: 10,
            onSale: false,
            // details: ['50% cotton', '30% wool', '20% polyester'],
            // variants: [
            //     { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
            //     { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            // ],
            // cart: 0,
            // sizes: ['S ', 'M ', 'L ']
        }
    },
    // methods: {
    //     addToCart() {
    //     this.cart += 1
    //     this.inventory -= 1
    //     },
    //     updateImage(variantImage) {
    //         this.image = variantImage
    //     },
    //     deduct() {
    //         this.inventory -= 1
    //     }
    // }
})