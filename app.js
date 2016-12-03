/**
* @Author: yannik
* @Date:   2016-12-03T19:52:10+01:00
* @Last modified by:   yannik
* @Last modified time: 2016-12-04T00:00:43+01:00
*/



'use strict'

require('marko/express')
require('marko/node-require').install()

const express = require('express'),
      config = require('./config.json'),
      fs = require('fs'),
      app = express()

app.use(express.static(__dirname + '/static/'))

app.get('/', (req, res, next) => {
    fs.readFile('views/index.html', (err, fd) => {
        if (err) return next(err)
        res.header('Content-Type', 'text/html; charset=utf-8')
        res.send(fd)
    })
})

app.use((err, req, res, next) => {
    console.log(err)
    res.send('500 Internal Server Error')
})

app.listen(config.port, () => {
    console.log('server listening on port', config.port)
})
