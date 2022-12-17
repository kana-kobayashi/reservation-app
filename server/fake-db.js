const Product = require("./model/product")

class FakeDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'Heading1',
        heading2: 'Heading2',
        heading3: 'Heading3',
        headingtext1: 'サンプル1111',
        headingtext2: 'サンプル2222',
        headingtext3: 'サンプル3333'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'Heading1',
        heading2: 'Heading2',
        heading3: 'Heading3',
        headingtext1: 'サンプル1',
        headingtext2: 'サンプル2',
        headingtext3: 'サンプル3'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'Heading1',
        heading2: 'Heading2',
        heading3: 'Heading3',
        headingtext1: 'サンプル1',
        headingtext2: 'サンプル2',
        headingtext3: 'サンプル3'
      }


    ]

  }

  async initDb() {
    await this.cleanDB()
    this.pushProductsToDb()
  }

  async cleanDB() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }
  seeDb() {
    this.pushProductsToDb()
  }
}

module.exports = FakeDb
