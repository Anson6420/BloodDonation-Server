// import json library
const jsonServer = require("json-server")

// create the server
const bloodServer = jsonServer.create()

// middleware to parse the json format
const middleware = jsonServer.defaults()

// set up path to store data
const router = jsonServer.router('db.json')

// Ask the server to use the middleware
bloodServer.use(middleware)
bloodServer.use(router)

// set port for server
const PORT = 4000 || process.env.PORT

// listen to the port 
bloodServer.listen(PORT,()=>{
    console.log(`The server running successfully at port No ${PORT}`);
})