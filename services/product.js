const { pool } = require("../middlewares/pool")

/**
 * It's a function that takes two parameters, req and res, and it's going to query the database for all
 * the products, and then it's going to return the results in a JSON format.
 * @param req - The request object.
 * @param res - the response object
 * @returns the result of the query.
 */
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