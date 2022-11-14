const { pool } = require("../middlewares/pool")

/**
 * If there's an error, send a 500 status code with an error message and an empty array. Otherwise,
 * send a 200 status code with no error message and the categories.
 * @param req - The request object.
 * @param res - the response object
 * @returns The query result is being returned.
 */
module.exports.read = (req, res) => {
    const query = "SELECT * FROM category"
    pool.query(query, function(error, categories, fields) {
        if (error) {
            res.status(500).json({error, categories: []})
            return
        }

        res.status(200).json({error: null, categories})
    })
}