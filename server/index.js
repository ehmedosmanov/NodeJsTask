const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 8000

let counter = 4
let products = [
  {
    id: 1,
    name: 'Alma',
    price: 5,
    info: 'Quba Almasi',
    image: 'https://img2.milli.az/n/clickable/204433/07/4/alma_041.jpg'
  },
  {
    id: 2,
    name: 'Ciyelek',
    price: 25,
    info: 'Quba Ciyelek',
    image: 'https://img2.milli.az/n/clickable/204433/07/4/alma_041.jpg'
  },
  {
    id: 3,
    name: 'Armud',
    price: 15,
    info: 'Quba Armud',
    image: 'https://img2.milli.az/n/clickable/204433/07/4/alma_041.jpg'
  }
]

//Get All Products
app.get('/', (req, res) => {
  res.send(products)
})

//Get Product By Id
app.get('/product/:id', (req, res) => {
  const { id } = req.params
  const findProduct = products.find(x => x.id === +id)
  if (findProduct) {
    res.send(findProduct)
  }
})

//Delete Product
app.delete('/product/:id', (req, res) => {
  const { id } = req.params
  const findProduct = products.find(x => x.id === +id)
  if (findProduct) {
    products = products.filter(x => x.id !== +id)
    res.send(products)
  }
})

//Add Product
app.post('/', (req, res) => {
  products.push({
    id: counter++,
    ...req.body
  })
  res.send(products)
})

//Updated Product
app.put('/product/:id', (req, res) => {
  const { id } = req.params
  const updatedProductIndex = products.findIndex(x => x.id === +id)
  products[updatedProductIndex] = {
    id: +id,
    ...req.body
  }
  res.send(products)
})

//Run Server
app.listen(PORT, () => {
  console.log('Server is Running')
})
