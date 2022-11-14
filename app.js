require("dotenv").config()

const cors = require("cors")
const express = require("express")

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))

const product = require("./services/product")
const category = require("./services/category")
const filter = require("./services/filter")

// * PRODUCT
/* This is a route that is used to get all the products. */
app.get("/api/products", function(req, res) {
    product.read(req, res)
})

/* This is a route that is used to filter the products by its name. */
app.get("/api/product", function(req, res) {
    filter.product(req, res)
})

// * CATEGORY
/* This is a route that is used to get all the categories. */
app.get("/api/categories", function(req, res) {
    category.read(req, res)
})

/* This is a route that is used to filter the products by its category. */
app.get("/api/category", function(req, res) {
    filter.category(req, res)
})

//* FILTER
/* This is a route that is used to filter the products by its name or its categories. */
app.get("/api/product-category", function(req, res) {
    filter.productOrCategory(req, res)
}) 

app.get("/*", function(req, res) {
    const api = {
        products: "/api/products",
        product: "/api/product?name=${param}",
        product: "/api/categories",
        category: "/api/category?name=${param}",
        filter: "/api/product-category?name=${param}"
    }
    res.json(api)
})

/* This is a way to set the port for the server. The first part is setting the port to the environment
variable PORT or 4000. The second part is listening to the port. */
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})