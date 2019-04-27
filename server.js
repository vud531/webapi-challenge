const express = require('express')
const projectsRouter = require('./routers/projectsRouter')
const actionsRouter = require('./routers/actionsRouter')

const server = express()

server.use(express.json())

server.use('/api/projects', projectsRouter) 
server.use('/api/actions', actionsRouter) 

server.use((req, res, next) => {
    const error = new Error('not Found')
    res.status(404)
    next(err)
})

server.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        err: {
            message: err.message
        }
    })
})

module.exports = server

