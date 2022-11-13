const { pool } = require("../middlewares/pool")

module.exports.read = (req, res) => {
    const query = "SELECT * FROM product"
    pool.query(query, function(error, products, fields) {
        if (error) {
            res.status(500).json({error, products: []})
            return
        }

        res.status(200).json({error: null, products})
    })
}