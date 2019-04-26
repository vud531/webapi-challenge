const express = require('express')
const db = require('../data/helpers/actionModel') 

const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const result = await db.get()
        console.log(result)
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json('Data Not Found')
        }

    } catch (err) {
        res.status(500).json({errorMessage: 'Internal Server Error'})
    }
})

router.get('/:id', async(req, res) => {
    try {
        const result = await db.get(req.params.id)
        console.log(result)
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json('Data Not Found')
        }

    } catch (err) {
        res.status(500).json({errorMessage: 'Internal Server Error'})
    }
})


router.post('/', async(req, res) => {
    console.log(req.body)
    try {

        const result = await db.insert(req.body)
        if (result) {
            res.status(201).json(result)
        } 
        // else {
        //     res.status(400).json({errorMessage: 'Data Not Inserted'})
        // }

    } catch (err) {
        console.log(err)

        res.status(500).json({errorMessage: 'Internal Server Error'})
    }
})

router.put('/:id', async(req, res) => {

    try {
        const result = await db.update(req.params.id, req.body)
        if (result) {
            res.status(202).json(result)
        } 
        // else {
        //     res.status(400).json('Data Not Updated')
        // }
    } catch (err) {
        console.log(err)

        res.status(500).json({errorMessage: 'Internal Server Error'})
    }
})
router.delete('/:id', async(req, res) => {

    try {
        const result = await db.remove(req.params.id)
        res.status(202).json(result)

    } catch (err) {
        console.log(err)
        res.status(500).json({errorMessage: 'Internal Server Error'})
    }
})



module.exports = router