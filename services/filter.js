const { pool } = require("../middlewares/pool")

/**
 * It takes a query parameter called name, and uses it to filter the results of a query that joins the
 * product and category tables.
 * @param req - the request object
 * @param res - the response object
 * @returns An array of objects.
 */
module.exports.productOrCategory = (req, res) => {
    const {name} = req.query
    const filter = `'%${name}%'`
    const query = `SELECT p.* FROM product AS p 
                    INNER JOIN category as c ON p.category = c.id 
                    WHERE p.name LIKE ${filter} 
                    OR c.name LIKE ${filter}`
    
    pool.query(query, function(error, filter, fields) {
        if (error) {
            res.status(500).json({error, filter: []})
            return
        }

        res.status(200).json({error: null, filter})
    })
}

/**
 * If there's an error, send a 500 status code and an error message. Otherwise, send a 200 status code
 * and a success message.
 * @param req - The request object.
 * @param res - the response object
 * @returns The query is returning the entire table.
 */
module.exports.product = (req, res) => {
    const {name} = req.query
    const filter = `'%${name}%'`
    const query = `SELECT * FROM product WHERE name LIKE ${filter}`
    
    pool.query(query, function(error, filter, fields) {
        if (error) {
            res.status(500).json({error, filter: []})
            return
        }

        res.status(200).json({error: null, filter})
    })
}

/**
 * It's a function that receives a request and a response, and it's supposed to return a list of
 * products that match the category name.
 * @param req - the request object
 * @param res - the response object
 * @returns {
 *     "error": null,
 *     "filter": [
 *         {
 *             "id": 1,
 *             "name": "Product 1",
 *             "description": "Description 1",
 *             "price": "10.00",
 *             "category": 1,
 *             "created_at": "2019-11-11T00:00:00
 */

module.exports.category = (req, res) => {
    const { name } = req.query
    const filter = `'%${name}%'`

    console.log(filter)

    const query = `SELECT p.* FROM product AS p 
                    INNER JOIN category as c ON p.category = c.id 
                    WHERE c.name LIKE ${filter}`
    
    pool.query(query, function(error, filter, fields) {
        if (error) {
            res.status(500).json({error, filter: []})
            return
        }

        res.status(200).json({error: null, filter})
    })
}