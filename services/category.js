const { pool } = require("../middlewares/pool")

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