const express = require('express')
const projectsRouter = require('./routers/projectsRouter')

const server = express()

server.use(express.json())

server.use('/api/projects', projectsRouter) 
// server.user('/api/projects', projectsRouter) 

module.exports = server

