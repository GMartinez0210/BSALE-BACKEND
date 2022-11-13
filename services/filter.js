const { pool } = require("../middlewares/pool")

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