const express = require("express")


const router = express.Router()


router.get('/login', (req, res) => {
    res.status(200).json({"message": "Login Successfull"})
    return
})

module.exports = router