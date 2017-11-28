const compression = require('compression')
const express = require('express')
const path = require('path')
const fs = require('fs')


const app = express()


// Support Gzip
app.use(compression())

const buildPath = path.resolve(__dirname, 'build');

app.use(express.static(buildPath));

app.use((req, res) => res.sendFile(`${buildPath}/index.html`));

// Serve static assets

const PORT = process.env.PORT || 3000

// Why don't I need http createServer
app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}!`)
})