require("dotenv").config()

const mysql = require("mysql")
const cors = require("cors")
const express = require("express")

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))

const product = require("./services/product")
const category = require("./services/category")
const filter = require("./services/filter")

// * Product
app.get("/api/products", function(req, res) {
    product.read(req, res)
})

app.get("/api/product", function(req, res) {
    filter.product(req, res)
})

// * Category
app.get("/api/categories", function(req, res) {
    category.read(req, res)
})

app.get("/api/category", function(req, res) {
    filter.category(req, res)
})

// * Filter
app.get("/api/product-category", function(req, res) {
    filter.productOrCategory(req, res)
}) 

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})